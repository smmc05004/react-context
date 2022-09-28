import { FC, useMemo, useState } from "react";
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

  const value = useMemo(() => [counter, actions], [counter, actions]);

  return (
    <CounterContext.Provider value={value}>{children}</CounterContext.Provider>
  );
};

export default CounterProvider;
