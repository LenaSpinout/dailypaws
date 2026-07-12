"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { MissionStatus } from "@/domain/types";

interface MissionSessionState {
  status: MissionStatus;
  reflection: string | null;
}

interface MissionSessionContextValue extends MissionSessionState {
  startMission: () => void;
  completeMission: () => void;
  submitReflection: (optionId: string) => void;
  reset: () => void;
}

const initialState: MissionSessionState = {
  status: "not-started",
  reflection: null,
};

const MissionSessionContext = createContext<MissionSessionContextValue | null>(null);

export function MissionSessionProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<MissionSessionState>(initialState);

  const startMission = useCallback(() => {
    setState((prev) => ({ ...prev, status: "in-progress" }));
  }, []);

  const completeMission = useCallback(() => {
    setState((prev) => ({ ...prev, status: "completed" }));
  }, []);

  const submitReflection = useCallback((optionId: string) => {
    setState((prev) => ({ ...prev, reflection: optionId }));
  }, []);

  const reset = useCallback(() => {
    setState(initialState);
  }, []);

  const value = useMemo(
    () => ({ ...state, startMission, completeMission, submitReflection, reset }),
    [state, startMission, completeMission, submitReflection, reset]
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
