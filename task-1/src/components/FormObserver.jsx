import { useEffect } from "react";

export default function FormObserver({ values, isValid, onFormComplete }) {
  useEffect(() => {
    if (isValid) {
      onFormComplete();
    }
  }, [values, isValid]);

  return null;
}