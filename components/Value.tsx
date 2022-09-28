import useCounter from "../hooks/useCounter";

const Value = () => {
  const [counter] = useCounter();

  return <h1>{counter}</h1>;
};

export default Value;
