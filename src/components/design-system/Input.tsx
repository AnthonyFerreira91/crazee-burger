import { ChangeEventHandler, MouseEventHandler } from "react";
import { theme } from "../../themes/standardTheme";

type InputProps = {
  type: "text" | "button" | "submit";
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onClick?: MouseEventHandler<HTMLInputElement> | undefined;
  large?: boolean;
};

export default function Input({
  type = "text",
  value,
  placeholder,
  required,
  onChange = undefined,
  onClick = undefined,
  large,
}: InputProps) {
  const inputStyle = {
    width: large ? "85%" : "10rem",
    height: "5.5rem",
    background: type === "text" ? "white" : theme.colors.primary,
    color: type === "text" ? "black" : "white",
    borderRadius: theme.borderRadius.round,
    border: "none",
    fontFamily: "Arial",
    fontWeight: "700",
  };

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
