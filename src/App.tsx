import { createContext, useState } from "react";
import "./App.css";
import { Counter } from "./hooks/useState";
import { Header } from "./components/header";
import { Container } from "./templates/container";
import { UseContextSample } from "./hooks/useContext";
import { UseEffectSample } from "./hooks/useEffect";
import { UseRefSample } from "./hooks/useRef";
import { UseMemoSample } from "./hooks/useMemo";
import { UseReducerSample } from "./hooks/useReducer";
import { Menu } from "./components/menu";
import * as React from "react";

type IndexContextType = {
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const IndexContext = createContext({} as IndexContextType);

function App() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const item = () => {
    switch (selectedIndex) {
      case 0:
        return <Counter />;
      case 1:
        return <UseContextSample />;
      case 2:
        return <UseEffectSample />;
      case 3:
        return <UseRefSample />;
      case 4:
        return <UseMemoSample />;
      case 5:
        return <UseReducerSample />;
      default:
        null;
    }
  };

  return (
    <>
      <Header>React Hooks まとめ</Header>
      <IndexContext.Provider value={{ selectedIndex, setSelectedIndex }}>
        <Menu />
      </IndexContext.Provider>
      <div>
        <Container>{item()}</Container>
      </div>
    </>
  );
}

export default App;
