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
    justify-content: center;
    gap: 20px;
    align-items: center;
    color: ${theme.colors.primary};
    text-transform: uppercase;
  }

  .LoginPage {
    h1 {
      font-size: 11rem;
      font-weight: ${theme.weights.bold};
      line-height: 11.5rem;
    }

    img {
      width: 200px;
      height: 150px;
    }
  }
`;
