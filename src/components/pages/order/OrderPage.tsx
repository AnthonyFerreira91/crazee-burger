import { Link, useParams } from "react-router-dom";
import Button from "../../reusable-ui/Button";
import styled from "styled-components";

export default function OrderPage() {
  const { firstname } = useParams();
  return (
    <OrderPageStyled>
      <h1>Bonjour {firstname}</h1>
      <br />
      <Link to="/">
        <Button type="button">Déconnexion</Button>
      </Link>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  a {
    text-decoration: none;
  }
`;
