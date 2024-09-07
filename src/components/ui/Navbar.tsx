import { theme } from "../../themes/standardTheme";
import styled from "styled-components";
import Logo from "../reusable/Logo";
import Navbar_menu from "./Navbar_menu";


export default function Navbar() {
  
  return (
    <NavbarStyled>
      <div 
        onClick={() => window.location.reload()}
        style={{cursor: "pointer"}}
      >
        <Logo variant="Layout" />
      </div>
      <Navbar_menu />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7rem 0 2rem;
  border-radius: 15px 15px 0 0;
  /* height: 9.919rem; */
  height: 13.2vh;
`;
