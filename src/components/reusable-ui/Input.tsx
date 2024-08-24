import { ChangeEventHandler } from "react";
import { theme } from "../../themes/standardTheme";
import styled from "styled-components";
import { HiUser } from "react-icons/hi2";

// Retravailler l'icone user

type InputProps = {
  value: string;
  placeholder?: string;
  required?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  large?: boolean;
  icon?: boolean;
};

export default function Input({
  value,
  placeholder,
  required,
  onChange = undefined,
  large,
  icon,
}: InputProps) {
  const inputStyle = {
    width: large ? "100%" : "10rem",
    fontSize: theme.fonts.P0,
    borderRadius: theme.borderRadius.round,
    gap: "12.8px",
  };

  return (
    <InputStyled style={inputStyle}>
      {icon && (
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
        type="text"
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background: white;
  display: flex;
  align-items: center;
  padding: 18px 24px;

  > input::placeholder {
    color: #d3d3d3;
    font-weight: 400;
    line-height: 17px;
    font-size: 15px;
  }
`;
