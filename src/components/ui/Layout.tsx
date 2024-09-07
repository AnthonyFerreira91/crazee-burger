import { PropsWithChildren } from "react";
import styled from "styled-components";
import { theme } from "../../themes/standardTheme";
import Navbar from "./Navbar";

export default function Layout(props: PropsWithChildren) {
  return (
    <LayoutStyled>
      <Navbar />
      <div className="childrenContainer">{props.children}</div>
    </LayoutStyled>
  );
}

const LayoutStyled = styled.div`
  width: 140rem;
  display: flex;
  flex-direction: column;
  border-radius: ${theme.borderRadius.extraRound};
  height: 95%;
  font-family: "Open Sans", sans-serif;
  
  .childrenContainer {
    background: #f5f5f7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    border-radius: 0px 0px 15px 15px;
    height: 100%;
  }
`;
