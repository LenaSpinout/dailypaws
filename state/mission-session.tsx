"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { MissionStatus } from "@/domain/types";

const STORAGE_KEY = "dailypaws.mission-session.v1";

export interface MissionRecord {
  date: string;
  missionId: string;
  reflection: string | null;
  insightId: string | null;
  skipped: boolean;
}

interface MissionSessionState {
  status: MissionStatus;
  missionId: string | null;
  reflection: string | null;
  insightId: string | null;
  history: MissionRecord[];
}

interface MissionSessionContextValue {
  hydrated: boolean;
  status: MissionStatus;
  reflection: string | null;
  insightId: string | null;
  history: MissionRecord[];
  startMission: (missionId: string) => void;
  completeMission: () => void;
  submitReflection: (optionId: string) => void;
  skipReflection: () => void;
  recordInsightShown: (insightId: string) => void;
  reset: () => void;
}

const initialState: MissionSessionState = {
  status: "not-started",
  missionId: null,
  reflection: null,
  insightId: null,
  history: [],
};

const MissionSessionContext = createContext<MissionSessionContextValue | null>(null);

function loadState(): MissionSessionState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as MissionSessionState;
  } catch {
    return null;
  }
}

function saveState(state: MissionSessionState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function MissionSessionProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<MissionSessionState>(initialState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    // Reading localStorage must happen after mount to avoid an SSR/CSR
    // hydration mismatch (the server has no access to it).
    const stored = loadState();
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setState(stored);
    }
    setHydrated(true);
  }, []);

  const persist = useCallback((next: MissionSessionState) => {
    setState(next);
    saveState(next);
  }, []);

  const startMission = useCallback(
    (missionId: string) => {
      persist({ ...state, status: "in-progress", missionId });
    },
    [state, persist]
  );

  const completeMission = useCallback(() => {
    persist({ ...state, status: "completed" });
  }, [state, persist]);

  const submitReflection = useCallback(
    (optionId: string) => {
      persist({ ...state, reflection: optionId });
    },
    [state, persist]
  );

  const recordInsightShown = useCallback(
    (insightId: string) => {
      persist({ ...state, insightId });
    },
    [state, persist]
  );

  const archive = useCallback(
    (overrides: Pick<MissionRecord, "reflection" | "insightId" | "skipped">) => {
      if (!state.missionId) {
        persist({ ...initialState, history: state.history });
        return;
      }
      const record: MissionRecord = {
        date: new Date().toISOString().slice(0, 10),
        missionId: state.missionId,
        ...overrides,
      };
      persist({ ...initialState, history: [record, ...state.history] });
    },
    [state, persist]
  );

  const reset = useCallback(() => {
    archive({ reflection: state.reflection, insightId: state.insightId, skipped: false });
  }, [state, archive]);

  const skipReflection = useCallback(() => {
    // Skipping is deterministic: no Reflection answer and no Insight are ever
    // recorded for this Mission's cycle, matching DD-003 exactly, regardless
    // of any transient in-progress state.
    archive({ reflection: null, insightId: null, skipped: true });
  }, [archive]);

  const value = useMemo(
    () => ({
      hydrated,
      status: state.status,
      reflection: state.reflection,
      insightId: state.insightId,
      history: state.history,
      startMission,
      completeMission,
      submitReflection,
      skipReflection,
      recordInsightShown,
      reset,
    }),
    [
      hydrated,
      state.status,
      state.reflection,
      state.insightId,
      state.history,
      startMission,
      completeMission,
      submitReflection,
      skipReflection,
      recordInsightShown,
      reset,
    ]
  );

  return (
    <MissionSessionContext.Provider value={value}>
      {children}
    </MissionSessionContext.Provider>
  );
}

export function useMissionSession(): MissionSessionContextValue {
  const context = useContext(MissionSessionContext);
  if (!context) {
    throw new Error("useMissionSession must be used within a MissionSessionProvider");
  }
  return context;
}
