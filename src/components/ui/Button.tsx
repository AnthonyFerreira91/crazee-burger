import { MouseEventHandler, ReactNode } from "react";
import { theme } from "../../themes/standardTheme";
import styled from "styled-components";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "transparent" | "admin";
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  Large?: boolean;
};

export default function Button({
  type = "button",
  variant = "primary",
  onClick,
  children,
  Large,
}: ButtonProps) {
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      style={{width: Large ? "100%" : ""}}
      className={variant}
    >
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-family: Open Sans;
  font-weight: ${theme.fonts.weight.bold};
  cursor: pointer;
  
  &.primary {
    background: ${theme.colors.primary_burger};
    padding: 1.8rem 2.4rem;
    border-radius: ${theme.borderRadius.round};
    font-family: "Arial";
    font-size: ${theme.fonts.size.P0};
    color: ${theme.colors.white};

    &:hover {
      background: ${theme.colors.white};
      color: ${theme.colors.primary_burger};
    }
  }

  &.transparent {
    background: transparent;
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.size.XXS};
    font-weight: ${theme.fonts.weight.regular};

    &:hover {
      border-bottom: 1px solid ${theme.colors.greyBlue};
    }
  }

  &.admin {
    background: ${theme.colors.background_dark};
    width: 20rem;
    justify-content: flex-start;
    gap: 0.5rem;
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    border-radius: ${theme.borderRadius.largeExtraRound};
    font-size: ${theme.fonts.size.XXS};
    color: ${theme.colors.primary};
    letter-spacing: ${theme.spacing.xxxs};
    text-transform: uppercase;
  }
`;
