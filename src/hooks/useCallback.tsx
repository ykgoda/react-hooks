import { useCallback, useState, memo } from "react";
import { Button } from "../components/button";

export const UseCallbackSample = () => {
  const [count, setCount] = useState<number>(0);
  const func1 = useCallback(() => {
    console.log("func1");
    setCount((prevCount) => prevCount + 1);
  }, []);

  const func2 = () => {
    console.log("func2");
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <div>{count}</div>
      <Child1 func={func1} />
      <Child2 func={func2} />
    </div>
  );
};

type Props = {
  func: Function;
};

const Child1: React.FC<Props> = memo(({ func }) => {
  console.log("Child1 is rendered");
  return (
    <div>
      <Button onClick={func}>Child1</Button>
    </div>
  );
});

const Child2: React.FC<Props> = ({ func }) => {
  console.log("Child2 is rendered");
  return (
    <div>
      <Button onClick={func}>Child2</Button>
    </div>
  );
};
