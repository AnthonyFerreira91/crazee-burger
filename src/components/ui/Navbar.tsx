import { theme } from "../../themes/standardTheme";
import styled from "styled-components";
import Logo from "../reusable/Logo";
import Menu from "./Menu";

export default function Navbar() {
  return (
    <NavbarStyled>
      <Logo variant="Layout" onClick={() => window.location.reload()} />
      <Menu />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.nav`
  background: ${theme.colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7rem 0 2rem;
  border-top-left-radius: ${theme.borderRadius.extraRound};
  border-top-right-radius: ${theme.borderRadius.extraRound};
  height: 13.2vh;
`;
