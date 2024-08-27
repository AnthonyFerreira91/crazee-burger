import LogoImage from "../../assets/images/logo.png";
import styled from "styled-components";
import { theme } from "../../themes/standardTheme";

type LogoProps = {
  variant: "LoginPage" | "Layout";
};

export default function Logo({ variant }: LogoProps) {
  return (
    <LogoStyled className={variant}>
      <h1>Crazee</h1>
      <img src={LogoImage} alt="logo" />
      <h1>Burger</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  color: ${theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.15rem;

  &:not(:not(.LoginPage)) {
    h1 {
      font-size: 11rem;
    }

    img {
      object-fit: contain;
      width: 20rem;
      height: 15rem;
    }
  }
`;
