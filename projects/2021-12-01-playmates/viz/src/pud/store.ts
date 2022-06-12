import create from "zustand";

export type Units = "metric" | "imperial";

export interface State {
  units: Units;
  set: (units: Units) => void;
}

export const useStore = create<State>((setS, get) => ({
  units: "imperial",
  set: (units) => setS({ units }),
}));

export function useIsMetric() {
  const units = useStore((state) => state.units);
  return units === "metric";
}
