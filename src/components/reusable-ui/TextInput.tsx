import { ChangeEventHandler, ComponentProps } from "react";
import { theme } from "../../themes/standardTheme";
import styled from "styled-components";

type TextInputProps = {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  Icon?: JSX.Element;
  Large?: boolean;
} & ComponentProps<"input">;

export default function TextInput({
  value,
  onChange,
  Icon,
  Large,
  ...restProps
}: TextInputProps) {
  return (
    <TextInputStyled style={{ width: Large ? "100%" : "25rem" }}>
      {Icon && Icon}
      <input type="text" value={value} onChange={onChange} {...restProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  background: ${theme.colors.white};
  display: flex;
  align-items: center;
  gap: 12.8px;
  padding: 18px 24px;
  border-radius: ${theme.borderRadius.round};

  > input {
    font-size: ${theme.fonts.size.P0};

    &::placeholder {
      color: #d3d3d3;
      line-height: 17px;
    }
  }
`;
