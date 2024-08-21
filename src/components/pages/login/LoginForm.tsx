import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../../design-system/Input";
import Separate from "./LoginSeparate";

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
      <h1>Bienvenue chez nous !</h1>
      <Separate />
      <h2>Connectez-vous</h2>
      <Input
        type="text"
        onChange={handleChange}
        value={firstname}
        placeholder="Entrez votre prénom"
        required
        large
      />
      <Input type="submit" value="Accéder à mon espace" large />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  border: 1px solid yellow;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: white;
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 6.1rem;
`;
