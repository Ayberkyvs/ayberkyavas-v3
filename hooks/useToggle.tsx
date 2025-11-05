"use client";
import { useCallback, useState } from "react";

export const useToggle = (initialState: boolean = false) => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState((prev) => !prev), []);

  return [state, toggle, setState] as const;
};
