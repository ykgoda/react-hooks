import { useReducer } from "react";
import { Button } from "../components/button";

type Action = {
  type: "increment" | "decrement" | "clear";
};

export const UseReducerSample = () => {
  const reducer = (state: number, action: Action) => {
    switch (action.type) {
      case "increment":
        return state + 1;
      case "decrement":
        return state - 1;
      case "clear":
        return 0;
      default:
        return state;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <div>count: {count}</div>
      <Button onClick={() => dispatch({ type: "increment" })}>increment</Button>
      <Button onClick={() => dispatch({ type: "decrement" })}>decrement</Button>
      <Button onClick={() => dispatch({ type: "clear" })}>clear</Button>
    </div>
  );
};
