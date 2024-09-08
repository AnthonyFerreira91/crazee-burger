import { theme } from "../../themes/standardTheme";
import styled from "styled-components";
import Profile from "./Profile";
import Button from "../reusable/Button";
import { FaCircle } from "react-icons/fa";

export default function Navbar_menu() {
  return (
    <Navbar_menuStyled>
      <Button variant="admin">
        <FaCircle size="3rem" fill={theme.colors.primary} />
        Activer le mode Admin
      </Button>
      <Profile />
    </Navbar_menuStyled>
  );
}

const Navbar_menuStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 6rem;
`;
