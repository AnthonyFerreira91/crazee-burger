import { MouseEventHandler } from "react";
import LogoImage from "../../assets/images/logo.png";
import styled from "styled-components";
import { theme } from "../../themes/standardTheme";

type LogoProps = {
  variant: "LoginPage" | "Layout";
  onClick?: MouseEventHandler<HTMLDivElement>
};

export default function Logo({ variant, onClick }: LogoProps) {
  return (
    <LogoStyled className={variant} onClick={onClick}>
      <h1>Crazee</h1>
      <img src={LogoImage} alt="logo" />
      <h1>Burger</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 0.15rem;

  &:not(:not(.LoginPage)) {
    gap: 2rem;

    h1 {
      font-size: 11rem;
    }

    img {
      object-fit: contain;
      width: 20rem;
      height: 15rem;
    }
  }

  &:not(:not(.Layout)) {
    gap: 0.4rem;
    cursor: pointer;

    h1 {
      font-size: ${theme.fonts.size.P4};
      line-height: ${theme.fonts.size.P4};
    }

    img {
      object-fit: contain;
      width: 8rem;
      height: 6rem;
    }
  }
`;
