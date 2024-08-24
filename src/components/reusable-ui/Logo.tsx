import LogoImage from "../../assets/images/logo.png";
import styled from "styled-components";
import { theme } from "../../themes/standardTheme";

type LogoProps = {
  variant: "LoginPage" | "Layout";
};

export default function Logo({ variant }: LogoProps) {
  return (
    <LogoStyled>
      <div className={variant}>
        <h1>Crazee</h1>
        <img src={LogoImage} alt="logo" />
        <h1>Burger</h1>
      </div>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 20px;
    color: ${theme.colors.primary};
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  .LoginPage {
    h1 {
      font-size: 11rem;
      font-weight: ${theme.weights.bold};
      /* line-height: 1rem; */
    }

    img {
      object-fit: contain;
      width: 200px;
      height: 150px;
    }
  }
`;
