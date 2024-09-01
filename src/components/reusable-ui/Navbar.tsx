import { Link, useParams } from "react-router-dom";
import { theme } from "../../themes/standardTheme";
import styled from "styled-components";
import Logo from "./Logo";
import Button from "./Button";
import { FaCircle } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";

export default function Navbar() {
  const { firstname } = useParams();
  return (
    <NavbarStyled>
      <Logo variant="Layout" />
      <div>
        <Button>
          <FaCircle size="3rem" fill={theme.colors.primary} />
          Activer le mode Admin
        </Button>
        <div>
          <div>
            <p>
              Hey, <span>{firstname}</span>
            </p>
            <br />
            <Link to="/">
              <button type="button">Déconnexion</button>
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
  padding: 0 7rem 0 2rem;
  border-radius: 15px 15px 0 0;
  height: 9.919rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1rem;

    > button {
      background: ${theme.colors.background_dark};
      color: ${theme.colors.primary};
      border-radius: 3rem;
      padding: 0.5rem 1rem 0.5rem 0.5rem;
      font-size: ${theme.fonts.size.XXS};
      gap: 0.5rem;
    }

    > div {
      display: flex;

      > div {
        padding: 0px, 0px, 0px, 50px;

        > p {
          font-size: 1.6rem;

          > span {
            color: ${theme.colors.primary};
          }
        }
      }
    }
  }
`;
