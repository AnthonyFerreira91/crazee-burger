import { Link, useParams } from "react-router-dom";
import { theme } from "../../themes/standardTheme";
import Button from "../reusable/Button";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { FaCircle } from "react-icons/fa";

export default function Navbar_menu() {
  const { firstname } = useParams();

  return (
    <Navbar_menuStyled>
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
    </Navbar_menuStyled>
  );
}

const Navbar_menuStyled = styled.div`
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
`;
