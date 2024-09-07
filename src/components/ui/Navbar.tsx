import { Link, useParams } from "react-router-dom";
import { theme } from "../../themes/standardTheme";
import styled from "styled-components";
import Logo from "../reusable/Logo";
import Button from "../reusable/Button";
import { BsPersonCircle } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";

export default function Navbar() {
  const { firstname } = useParams();
  return (
    <NavbarStyled>
      <div 
        onClick={() => window.location.reload()}
        style={{cursor: "pointer"}}
      >
        <Logo variant="Layout" />
      </div>
      <div className="navbar_menu">
        <Button variant="admin">
          <FaCircle size="3rem" fill={theme.colors.primary} />
          Activer le mode Admin
        </Button>
        <div className="navbar_menu_profile">
          <div className="navbar_menu_profile_name-logout">
            <p>
              Hey, <span>{firstname}</span>
            </p>
            <br />
            <Link to="/">
              <Button variant="transparent">Se déconnecter</Button>
            </Link>
          </div>
          <BsPersonCircle
            size={theme.fonts.size.P4}
            fill={theme.colors.greyBlue}
          />
        </div>
      </div>
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

  .navbar_menu {
    display: flex;
    align-items: center;
    gap: 6rem;

    &_profile {
      display: flex;
      align-items: center;
      gap: 1rem;

      &_name-logout {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.4rem;

        > p {
          font-size: 1.6rem;
          font-weight: 400;
          color: ${theme.colors.greyBlue};
          
          > span {
            font-weight: ${theme.fonts.weight.bold};
            color: ${theme.colors.primary};
            text-transform: capitalize;
          }
        }
      }   
    }
  }
`;
