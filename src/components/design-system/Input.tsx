import { ChangeEventHandler, MouseEventHandler } from "react";

type InputProps = {
  type: "text" | "button" | "submit";
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onClick?: MouseEventHandler<HTMLInputElement> | undefined;
};

export default function Input({
  type = "text",
  value,
  placeholder,
  required,
  onChange = undefined,
  onClick = undefined,
}: InputProps) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      onClick={onClick}
    />
  );
}
