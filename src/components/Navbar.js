import styled from "styled-components";
import Link from "next/link";
import { useRouter } from 'next/router'
import { useTask } from "../context/TaskContext";
import { SIZES, COLORS, FONTS } from "../constants/constants";



const Navbar = () => {

  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault();
    router.push('/new')
  }

  const { tasks } = useTask();
  return (
    <Navgigation>
      <NavLeft>
        <Link href="/" passHref>
          <Logo>Nextjs Task’s</Logo>
        </Link>
        <Tasks>{tasks.length} task’s</Tasks>
      </NavLeft>
      <Button onClick={handleClick}>Add Task</Button>
    </Navgigation>
  );
};

/*--------------- Styled Components ----------------- */

const Navgigation = styled.nav`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: ${SIZES.padding}px;
  margin: ${SIZES.margin};
  justify-content: space-around;
`;

const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.a`
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
  background: ${COLORS.green};
  height: ${SIZES.height}px;
  width: ${SIZES.width}px;

  &:hover {
    cursor: pointer;
    transition: 150ms;
    background: #30c86d;
  }
`;
  
export default Navbar;
