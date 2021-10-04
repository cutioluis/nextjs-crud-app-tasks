import styled from "styled-components";
import { SIZES, COLORS, FONTS } from "../constants/constants";

const Navbar = () => {
  return (
    <Navgigation>
      <NavLeft>
        <Logo>Nextjs Task’s</Logo>
        <Tasks>3 task’s</Tasks>
      </NavLeft>
      <Button>Add Task</Button>
    </Navgigation>
  );
};

const Navgigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  padding: ${SIZES.padding}px;
  margin: ${SIZES.margin};
  justify-content: space-around;
  background-color: #1a171c;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.p`
  font-size: ${FONTS.logo}px;
`;

const Tasks = styled.p`
  margin: ${SIZES.margin}px;
  font-size: ${FONTS.tooltip}px;
  color: ${COLORS.whiteSmoke};
`;

const Button = styled.button`
  border-radius: ${SIZES.borderRadius}px;
  border: none;
  background: ${COLORS.blackSmoke};
  height: ${SIZES.height}px;
  width: ${SIZES.width}px;
`;

export default Navbar;
