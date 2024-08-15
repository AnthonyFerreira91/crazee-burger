import Logo from "../../logo/Logo";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  return (
    <>
      <Logo variant="LoginPage" />
      <h1>Bienvenue chez nous !</h1>
      <LoginForm />
    </>
  );
}
