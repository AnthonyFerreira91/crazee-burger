import { PropsWithChildren } from "react";
import styled from "styled-components";
import { theme } from "../../themes/standardTheme";
import Navbar from "./Navbar";

export default function Layout(props: PropsWithChildren) {
  return (
    <LayoutStyled>
      <Navbar />
      <div>{props.children}</div>
    </LayoutStyled>
  );
}

const LayoutStyled = styled.div`
  /* background: ${theme.colors.white}; */
  min-width: 1400px;
  max-width: 1400px;
  border-radius: ${theme.borderRadius.extraRound};

  > div {
    background: #f5f5f7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    border-radius: 0px 0px 15px 15px;
    height: 200px;
  }
`;
