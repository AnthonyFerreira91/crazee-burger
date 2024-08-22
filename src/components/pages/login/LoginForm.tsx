import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../../design-system/Input";
import Separate from "./LoginSeparate";

// A faire
// Mettre un gap de 18px entre les elements h2 et input[button]
// Hr Plus gros
// plus d'espace vertical entre le Hr et le h2
// Hr plus à droite ? (Redimensionnée background ?)
// Logo légèrement à droite ? (Redimensionnée background ?)
// Padding en % pour une adaptation tout écran

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
        icon
      />
      <Input type="submit" value="Accéder à mon espace" large icon />
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  /* border: 1px solid yellow; */
  width: 30.69%;
  padding: 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: white;

  h1 {
    font-size: 4.8rem;
    font-weight: 700;
    line-height: 6.1rem;
  }

  h2 {
    font-size: 36px;
    font-weight: 700;
    line-height: 46px;
    text-align: center;
  }
`;
