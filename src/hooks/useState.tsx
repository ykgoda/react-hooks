import { useState } from "react";
import { Button } from "../components/button";

export const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span>{count}</span>
      <Button onClick={handleClick} backgroundColor="#72C6EF">
        +1
      </Button>
    </div>
  );
};
