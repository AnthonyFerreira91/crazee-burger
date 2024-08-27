import { MouseEventHandler, ReactNode } from "react";
import { theme } from "../../themes/standardTheme";
import styled from "styled-components";

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  Large?: boolean;
};

export default function Button({
  type = "button",
  onClick,
  children,
  Large,
}: ButtonProps) {
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      style={{ width: Large ? "100%" : "" }}
    >
      {children}
    </ButtonStyled>
  );
}

const ButtonStyled = styled.button`
  background: ${theme.colors.primary_burger};
  color: ${theme.colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1.8rem 2.4rem;
  font-size: ${theme.fonts.size.P0};
  font-weight: ${theme.fonts.weight.bold};
  border-radius: ${theme.borderRadius.round};
  cursor: pointer;

  &:hover {
    background: ${theme.colors.white};
    color: ${theme.colors.primary_burger};
  }
`;
