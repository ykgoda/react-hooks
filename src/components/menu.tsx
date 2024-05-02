import styled from "styled-components";
import { menuList } from "../setting";
import { useContext } from "react";
import { IndexContext } from "../App";

export const Menu = () => {
  return (
    <MenuContainer>
      {menuList.map((menu, index) => (
        <MenuItem key={index} item={menu} index={index} />
      ))}
    </MenuContainer>
  );
};

type Props = {
  item: string;
  index: number;
};

export const MenuItem: React.FC<Props> = ({ item, index }) => {
  const { selectedIndex, setSelectedIndex } = useContext(IndexContext);
  return <div onClick={() => setSelectedIndex(index)}>{item}</div>;
};

const MenuContainer = styled.div`
  width: 100%;
  height: 16%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
