import { MouseEventHandler, ReactNode, useState } from "react";
import { theme } from "../../themes/standardTheme";

type ButtonProps = {
  type: "button" | "submit";
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  large?: boolean;
};

export default function Button({
  type,
  onClick,
  children,
  large,
}: ButtonProps) {
  const [hover, setHover] = useState(false);

  const buttonStyle = {
    width: large ? "100%" : "10rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    padding: "18px 24px",
    background: hover ? "white" : theme.colors.primary_burger,
    color: hover ? theme.colors.primary_burger : "white",
    fontSize: theme.fonts.P0,
    fontWeight: theme.weights.bold,
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
