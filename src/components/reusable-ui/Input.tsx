import { ChangeEventHandler, ComponentPropsWithoutRef } from "react";
import { theme } from "../../themes/standardTheme";
import styled from "styled-components";

type InputProps = {
  value: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  Icon?: JSX.Element;
  large?: boolean;
} & ComponentPropsWithoutRef<"input">;

export default function Input({
  value,
  onChange,
  Icon,
  large,
  ...restProps
}: InputProps) {
  return (
    <InputStyled style={{ width: large ? "100%" : "25rem" }}>
      {Icon && Icon}
      <input type="text" value={value} onChange={onChange} {...restProps} />
    </InputStyled>
  );
}

const InputStyled = styled.div`
  background: white;
  display: flex;
  align-items: center;
  gap: 12.8px;
  padding: 18px 24px;
  border-radius: ${theme.borderRadius.round};

  > input {
    font-size: ${theme.fonts.P0};

    &::placeholder {
      color: #d3d3d3;
      line-height: 17px;
    }
  }
`;
