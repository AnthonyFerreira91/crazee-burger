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
  font-weight: ${theme.fonts.weight.bold};
  cursor: pointer;
  
  &.primary {
    background: ${theme.colors.primary_burger};
    color: ${theme.colors.white};
    font-size: ${theme.fonts.size.P0};
    padding: 1.8rem 2.4rem;
    border-radius: ${theme.borderRadius.round};

    &:hover {
      background: ${theme.colors.white};
      color: ${theme.colors.primary_burger};
    }
  }

  &.transparent {
    background: transparent;
    color: ${theme.colors.greyBlue};
    font-size: ${theme.fonts.size.XXS};

    &:hover {
      border-bottom: 1px solid ${theme.colors.greyBlue};
    }
  }

  &.admin {
    background: ${theme.colors.background_dark};
    color: ${theme.colors.primary};
    border-radius: ${theme.borderRadius.largeExtraRound};
    padding: 0.5rem 1rem 0.5rem 0.5rem;
    font-size: ${theme.fonts.size.XXS};
    gap: 0.5rem;
  }
`;
