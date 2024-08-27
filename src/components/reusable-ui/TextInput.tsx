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
    <TextInputStyled style={{ width: Large ? "100%" : "" }}>
      {Icon && Icon}
      <input type="text" value={value} onChange={onChange} {...restProps} />
    </TextInputStyled>
  );
}

const TextInputStyled = styled.div`
  background: ${theme.colors.white};
  display: flex;
  align-items: center;
  gap: 1.28rem;
  padding: 1.8rem 2.4rem;
  border-radius: ${theme.borderRadius.round};

  > input {
    font-size: ${theme.fonts.size.P0};

    &::placeholder {
      color: ${theme.colors.placeholder};
      line-height: 1.7rem;
    }
  }
`;
