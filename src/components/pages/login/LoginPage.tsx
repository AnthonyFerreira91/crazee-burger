import styled from "styled-components";
import Logo from "../../logo/Logo";
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
  width: 100vw;
  height: 100vh;
  background: url("/images/burgerBackground.jpg");
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Amatic SC", sans-serif;
`;
