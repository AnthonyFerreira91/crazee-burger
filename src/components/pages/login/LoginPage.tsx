import styled from "styled-components";
import Logo from "../../logo/Logo";
import LoginForm from "./LoginForm";
import Separate from "./LoginSeparate";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo variant="LoginPage" />
      <h1>Bienvenue chez nous !</h1>
      <Separate />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  width: 100vw;
  height: 100vh;
  background: url("/images/burgerBackground.jpg");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 48px;
  font-weight: 700;
  line-height: 61px;
  font-family: "Amatic SC", sans-serif;
`;
