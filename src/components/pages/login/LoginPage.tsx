import styled from "styled-components";
import Logo from "../../logo/Logo";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <div>
        <Logo variant="LoginPage" />
        <LoginForm />
      </div>
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("/images/burgerBackground.jpg");
  background-size: 100% 101.5%;
  font-family: "Amatic SC", sans-serif;

  > div {
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    padding-top: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 4px 4px 0px;
  }
`;
