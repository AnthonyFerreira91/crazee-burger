import { ChangeEventHandler, MouseEventHandler } from "react";
import { theme } from "../../themes/standardTheme";
import styled from "styled-components";
import { RiArrowRightSLine } from "react-icons/ri";
import { HiUser } from "react-icons/hi2";

// Retravailler l'icone user

type InputProps = {
  type: "text" | "button" | "submit";
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onClick?: MouseEventHandler<HTMLInputElement> | undefined;
  large?: boolean;
  icon?: boolean;
};

export default function Input({
  type = "text",
  value,
  placeholder,
  required,
  onChange = undefined,
  onClick = undefined,
  large,
  icon,
}: InputProps) {
  const inputStyle = {
    width: large ? "100%" : "10rem",
    fontSize: theme.fonts.P0,
    background: type === "text" ? "white" : theme.colors.primary_burger,
    borderRadius: theme.borderRadius.round,
    justifyContent: type === "text" ? "inset" : "center",
    gap: type === "text" ? "12.8px" : "10px",
    cursor: type === "text" ? "inset" : "pointer",
  };

  return (
    <InputStyled onClick={onClick} style={inputStyle}>
      {icon && type === "text" && (
        <HiUser
          size="15px"
          color={theme.colors.greyBlue}
          style={{
            border: `2px solid ${theme.colors.greyBlue}`,
            borderRadius: `${theme.borderRadius.circle}`,
          }}
        />
      )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
      {icon && type === "submit" && <RiArrowRightSLine size="15px" />}
    </InputStyled>
  );
}

const InputStyled = styled.div`
  padding: 18px 24px;
  display: flex;

  > input {
    border: none;
    font-family: "Arial";
    background: transparent;
  }

  > input[type="text"]::placeholder {
    color: #d3d3d3;
    font-weight: 400;
    line-height: 17px;
    font-size: 15px;
  }

  > input[type="submit"] {
    color: white;
    font-weight: 700;
    cursor: pointer;
  }
`;
