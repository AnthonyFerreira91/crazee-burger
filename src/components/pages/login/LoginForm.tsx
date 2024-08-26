import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../themes/standardTheme";
import TextInput from "../../reusable-ui/TextInput";
import Button from "../../reusable-ui/Button";
import { BsPersonCircle } from "react-icons/bs";
import { RiArrowRightSLine } from "react-icons/ri";
import Separate from "./LoginSeparate";

export default function LoginForm() {
  const [firstname, setFirstname] = useState("");
  const navigate = useNavigate();

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
      <TextInput
        value={firstname}
        onChange={(event) => setFirstname(event.target.value)}
        Icon={<BsPersonCircle size="15px" color={theme.colors.greyBlue} />}
        Large
        placeholder="Entrez votre prénom"
        required
      />
      <Button type="submit" large>
        Accéder à mon espace
        <RiArrowRightSLine size="15px" />
      </Button>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.form`
  width: 30.69%;
  padding: 3.9rem 3.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  color: ${theme.colors.white};

  h1 {
    font-size: ${theme.fonts.size.P5};
    line-height: 6.1rem;
  }

  h2 {
    font-size: ${theme.fonts.size.P4};
    line-height: 46px;
    text-align: center;
  }
`;
