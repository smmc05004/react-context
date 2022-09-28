import { useContext } from "react";
import { ActionContext } from "../context/actionContext";

export default function useActions() {
  const value = useContext(ActionContext);
  if (value === undefined) {
    throw new Error("useAction should be used within CounterProvider");
  }
  return value;
}
