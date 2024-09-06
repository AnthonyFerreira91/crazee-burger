import styled from "styled-components";
import Logo from "../../ui/Logo";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <LoginPageStyled>
      <Logo variant="LoginPage" />
      <LoginForm />
    </LoginPageStyled>
  );
}

const LoginPageStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("/images/burgerBackground.jpg"), rgba(0, 0, 0, 0.5);
  background-position: center;
  background-size: cover;
  background-blend-mode: darken;
`;
