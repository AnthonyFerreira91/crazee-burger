import styled from "styled-components";
import Logo from "../../logo/Logo";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo variant="LoginPage" />
      <h1>Bienvenue chez nous !</h1>
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  font-family: "Amatic SC", sans-serif;
`;
