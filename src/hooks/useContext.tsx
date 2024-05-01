import { createContext, useContext, useState } from "react";
import { Button } from "../components/button";

const ValueContext = createContext<string>("sample");

export const UseContextSample = () => {
  return (
    <div>
      <ValueProvider />
      <ValueStateProvider />
    </div>
  );
};

export const ValueProvider = () => {
  const value = useContext(ValueContext);

  return (
    <ValueContext.Provider value="sample">
      <div>{value}</div>
    </ValueContext.Provider>
  );
};

export const ValueStateProvider = () => {
  const [value, setValue] = useState<string>("sample");

  const handleClick = () => {
    setValue(value == "sample" ? "aiueo" : "sample");
  };

  return (
    <ValueContext.Provider value={value}>
      <div>{value}</div>
      <Button onClick={handleClick}>change</Button>
    </ValueContext.Provider>
  );
};
