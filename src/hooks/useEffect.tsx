import { useEffect, useState } from "react";
import { Button } from "../components/button";

export const UseEffectSample = () => {
  const [simpleCount, setSimpleCount] = useState<number>(0);
  const [effectCount, setEffectCount] = useState<number>(0);

  useEffect(() => {
    console.log("effectCount is clicked");
  }, [effectCount]);

  return (
    <div>
      <span>simpleCount: {simpleCount}</span>
      <Button onClick={() => setSimpleCount((prevCount) => prevCount + 1)}>
        simple
      </Button>

      <span>effectCount: {effectCount}</span>
      <Button onClick={() => setEffectCount((prevCount) => prevCount + 1)}>
        effect
      </Button>
    </div>
  );
};
