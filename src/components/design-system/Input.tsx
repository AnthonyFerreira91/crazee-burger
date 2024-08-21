import { ChangeEventHandler, MouseEventHandler } from "react";
import { theme } from "../../themes/standardTheme";

// A Faire
// Faire une div pour pouvoir mettre en place les logos

type InputProps = {
  type: "text" | "button" | "submit";
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onClick?: MouseEventHandler<HTMLInputElement> | undefined;
  large?: boolean;
  // logo?: SVGElement;
};

export default function Input({
  type = "text",
  value,
  placeholder,
  required,
  onChange = undefined,
  onClick = undefined,
  large,
}: // logo
InputProps) {
  const inputStyle = {
    width: large ? "100%" : "10rem",
    // height: "5.5rem",
    padding: "18px 24px",
    fontSize: theme.fonts.P0,
    background: type === "text" ? "white" : theme.colors.primary_burger,
    color: type === "text" ? "black" : "white",
    borderRadius: theme.borderRadius.round,
    border: "none",
    fontFamily: "Arial",
    fontWeight: "700",
    cursor: "pointer",
  };

  // const valueLogo = ``

  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      onClick={onClick}
      style={inputStyle}
    />
  );
}
