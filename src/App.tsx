import { useState } from "react";
import "./App.css";
import { Counter } from "./hooks/useState";
import { Header } from "./components/header";
import { Container } from "./templates/container";
import { UseContextSample } from "./hooks/useContext";
import { Menu } from "./components/menu";

function App() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const item = () => {
    switch (selectedIndex) {
      case 0:
        return <Counter />;
      case 1:
        return <UseContextSample />;
      default:
        null;
    }
  };

  return (
    <>
      <Header>React Hooks まとめ</Header>
      <Menu />
      <div>
        <Container>{item}</Container>
      </div>
    </>
  );
}

export default App;
