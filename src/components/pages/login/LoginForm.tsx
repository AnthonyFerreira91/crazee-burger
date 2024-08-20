import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../../design-system/Input";

export default function LoginForm() {
  const [firstname, setFirstname] = useState("");
  const navigate = useNavigate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    setFirstname(event.target.value);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setFirstname("");
    navigate(`/order/${firstname}`);
  };

  return (
    <LoginFormStyled onSubmit={handleSubmit}>
      <h2>Connectez-vous</h2>
      <Input
        type="text"
        onChange={handleChange}
        value={firstname}
        placeholder="Entrez votre prénom"
        required
      />
      <Input type="submit" value="Accéder à mon espace" />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form``;
