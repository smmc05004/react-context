import { useContext } from "react";
import { CounterContext } from "../context/counterContext";

export default function useCounter() {
  const value = useContext(CounterContext);
  if (value === undefined) {
    throw new Error("useCounter should be used within CounterProvider");
  }
  return value;
}
