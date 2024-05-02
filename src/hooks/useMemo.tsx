import { useMemo, useState } from "react";

export const UseMemoSample = () => {
  const [value, setValue] = useState<number>(0);
  const [dummy, setDummy] = useState<number>(0);

  const sum = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
      sum += i;
    }
    return value + sum;
  }, [value]);

  const handleClick = (isDummy: boolean = false) => {
    isDummy ? setDummy((prev) => prev + 1) : setValue((prev) => prev + 1);
    console.log(isDummy);
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={() => handleClick(false)}>value + 1</button>
      <div>dummy: {dummy}</div>
      <button onClick={() => handleClick(true)}>dummy + 1</button>
      <div>sum: {sum}</div>
    </div>
  );
};
