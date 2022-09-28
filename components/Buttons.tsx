import useActions from "../hooks/useActions";

const Buttons = () => {
  const actions = useActions();

  return (
    <div>
      <button onClick={actions.increase}>+</button>
      <button onClick={actions.decrease}>-</button>
    </div>
  );
};

export default Buttons;
