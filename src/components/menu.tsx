import styled from "styled-components";
import { menuList } from "../setting";

export const Menu = () => {
  return (
    <MenuContainer>
      {menuList.map((menu) => (
        <MenuItem item={menu} />
      ))}
    </MenuContainer>
  );
};

type Props = {
  item: string;
};

export const MenuItem: React.FC<Props> = ({ item }) => {
  return <div>{item}</div>;
};

const MenuContainer = styled.div`
  width: 100%;
  height: 16%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
