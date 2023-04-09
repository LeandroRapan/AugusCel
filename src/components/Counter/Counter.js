import { useState } from "react";

const Counter = ({title, stock}) => {
  const [count, setCount] = useState(1);
  const [message, setMessaje] = useState("");

  const decrement = () => {
    setMessaje("");
    if (count > 1) {
      setCount(count - 1);
    } else {
      setMessaje("No puede comprar menos de 1");
    }
  };

  const increment = () => {
    setMessaje("");
    if (count < stock) {
      setCount(count + 1);
    } else {
      setMessaje("no se puede agregar más");
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <h2>{count}</h2>
      <h3>Cantidad disponible: {stock}</h3>
      <button onClick={decrement} className="btn btn-primary btn-lg" style={{ width: "20px" }}>-</button>
      <button onClick={increment} className="btn btn-primary btn-lg" style={{ width: "20px" }}>+</button>
      <p>{message}</p>
    </div>
  );
};

export default Counter;