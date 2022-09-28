import { FC, useMemo, useState } from "react";
import { ActionContext } from "../../context/actionContext";
import { CounterContext } from "../../context/counterContext";

const CounterProvider: FC = ({ children }) => {
  const [counter, setCounter] = useState(1);

  const actions = useMemo(
    () => ({
      increase() {
        setCounter((prev) => prev + 1);
      },
      decrease() {
        setCounter((prev) => prev - 1);
      },
    }),
    []
  );

  return (
    <ActionContext.Provider value={actions}>
      <CounterContext.Provider value={counter}>
        {children}
      </CounterContext.Provider>
    </ActionContext.Provider>
  );
};

export default CounterProvider;
