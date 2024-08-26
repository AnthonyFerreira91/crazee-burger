import { MouseEventHandler, ReactNode, useState } from "react";
import { theme } from "../../themes/standardTheme";

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  large?: boolean;
};

export default function Button({
  type = "button",
  onClick,
  children,
  large,
}: ButtonProps) {
  const [hover, setHover] = useState(false);

  const buttonStyle = {
    width: large ? "100%" : "20rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    padding: "18px 24px",
    background: hover ? theme.colors.white : theme.colors.primary_burger,
    color: hover ? theme.colors.primary_burger : theme.colors.white,
    fontSize: theme.fonts.size.P0,
    fontWeight: theme.fonts.weights.bold,
    borderRadius: theme.borderRadius.round,
    cursor: "pointer",
  };

  const onHandleHover = () => {
    setHover((hover) => !hover);
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={buttonStyle}
      onMouseEnter={onHandleHover}
      onMouseLeave={onHandleHover}
    >
      {children}
    </button>
  );
}
