import useCounter from "../hooks/useCounter";

const Buttons = () => {
  const [, actions] = useCounter();

  return (
    <div>
      <button onClick={actions.increase}>+</button>
      <button onClick={actions.decrease}>-</button>
    </div>
  );
};

export default Buttons;
