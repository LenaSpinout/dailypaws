"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Family, GoalType, LifeStage } from "@/domain/types";

const STORAGE_KEY = "dailypaws.onboarding.v1";

export type OnboardingStep = 1 | 2 | 3 | 4 | 5;

interface OnboardingAnswers {
  dogName: string | null;
  lifeStage: LifeStage | null;
  personName: string | null;
  otherFamilyMembers: string[];
  goalType: GoalType | null;
  goalNote: string | null;
}

interface OnboardingState {
  step: OnboardingStep;
  answers: OnboardingAnswers;
  completed: boolean;
}

const initialAnswers: OnboardingAnswers = {
  dogName: null,
  lifeStage: null,
  personName: null,
  otherFamilyMembers: [],
  goalType: null,
  goalNote: null,
};

const initialState: OnboardingState = {
  step: 1,
  answers: initialAnswers,
  completed: false,
};

interface OnboardingContextValue {
  hydrated: boolean;
  hasStarted: boolean;
  isResuming: boolean;
  step: OnboardingStep;
  completed: boolean;
  answers: OnboardingAnswers;
  family: Family | null;
  setDogName: (name: string) => void;
  setLifeStage: (stage: LifeStage | null) => void;
  setPersonName: (name: string) => void;
  setOtherFamilyMembers: (names: string[]) => void;
  completeGoalStep: (goalType: GoalType, note: string | null) => Family;
  goBack: () => void;
  dismissWelcomeBack: () => void;
}

const OnboardingContext = createContext<OnboardingContextValue | null>(null);

function isValidOnboardingState(value: unknown): value is OnboardingState {
  if (!value || typeof value !== "object") return false;
  const candidate = value as Partial<OnboardingState>;
  return (
    typeof candidate.step === "number" &&
    candidate.step >= 1 &&
    candidate.step <= 5 &&
    typeof candidate.completed === "boolean" &&
    typeof candidate.answers === "object" &&
    candidate.answers !== null
  );
}

function loadState(): OnboardingState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    // A corrupted or unexpectedly-shaped record should never surface as a
    // blank/broken screen — treat it the same as no persisted data at all.
    return isValidOnboardingState(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

function saveState(state: OnboardingState) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage may be unavailable (private browsing, quota exceeded, disabled).
    // The app keeps working in-memory for this session; nothing to surface.
  }
}

function buildFamily(answers: OnboardingAnswers): Family {
  const otherPeople = answers.otherFamilyMembers.map((name, index) => ({
    id: `person-${index + 2}`,
    name,
  }));

  return {
    id: "family-1",
    people: [{ id: "person-1", name: answers.personName ?? "" }, ...otherPeople],
    dog: {
      id: "dog-1",
      name: answers.dogName ?? "",
      lifeStage: answers.lifeStage ?? undefined,
    },
    goal: answers.goalType
      ? { id: "goal-1", type: answers.goalType, note: answers.goalNote ?? undefined }
      : undefined,
  };
}

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<OnboardingState>(initialState);
  const [hydrated, setHydrated] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isResuming, setIsResuming] = useState(false);

  useEffect(() => {
    // Reading localStorage must happen after mount to avoid an SSR/CSR
    // hydration mismatch (the server has no access to it).
    const stored = loadState();
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setState(stored);
      setHasStarted(true);
      setIsResuming(stored.step > 1 && !stored.completed);
    }
    setHydrated(true);
  }, []);

  const persist = useCallback((next: OnboardingState) => {
    setState(next);
    setHasStarted(true);
    saveState(next);
  }, []);

  const setDogName = useCallback(
    (name: string) => {
      persist({ ...state, step: 2, answers: { ...state.answers, dogName: name } });
    },
    [state, persist]
  );

  const setLifeStage = useCallback(
    (stage: LifeStage | null) => {
      persist({ ...state, step: 3, answers: { ...state.answers, lifeStage: stage } });
    },
    [state, persist]
  );

  const setPersonName = useCallback(
    (name: string) => {
      persist({ ...state, step: 4, answers: { ...state.answers, personName: name } });
    },
    [state, persist]
  );

  const setOtherFamilyMembers = useCallback(
    (names: string[]) => {
      persist({ ...state, step: 5, answers: { ...state.answers, otherFamilyMembers: names } });
    },
    [state, persist]
  );

  const completeGoalStep = useCallback(
    (goalType: GoalType, note: string | null) => {
      const answers = { ...state.answers, goalType, goalNote: note };
      persist({ ...state, answers, completed: true });
      return buildFamily(answers);
    },
    [state, persist]
  );

  const goBack = useCallback(() => {
    const previousStep = Math.max(1, state.step - 1) as OnboardingStep;
    persist({ ...state, step: previousStep });
  }, [state, persist]);

  const dismissWelcomeBack = useCallback(() => {
    setIsResuming(false);
  }, []);

  const family = state.completed ? buildFamily(state.answers) : null;

  const value: OnboardingContextValue = {
    hydrated,
    hasStarted,
    isResuming,
    step: state.step,
    completed: state.completed,
    answers: state.answers,
    family,
    setDogName,
    setLifeStage,
    setPersonName,
    setOtherFamilyMembers,
    completeGoalStep,
    goBack,
    dismissWelcomeBack,
  };

  return <OnboardingContext.Provider value={value}>{children}</OnboardingContext.Provider>;
}

export function useOnboarding(): OnboardingContextValue {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
}
