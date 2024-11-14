import { Dispatch, SetStateAction } from "react";

export interface OnboardingContextState {
  progress: number;
  setProgress: Dispatch<SetStateAction<number>>;
}
