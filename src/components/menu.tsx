import styled from "styled-components";
import { menuList, menuWidth } from "../setting";
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
  return (
    <MenuItemContainer onClick={() => setSelectedIndex(index)}>
      {item}
    </MenuItemContainer>
  );
};

const MenuContainer = styled.div`
  height: 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ccc;
  padding: 0 8px;
`;

const MenuItemContainer = styled.div`
  width: ${menuWidth}%;
  height: 100%;
  border: 1px solid #eee;
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
