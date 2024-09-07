import styled from "styled-components";
import Layout from "../../components/ui/Layout";
import { theme } from "../../themes/standardTheme";

export default function OrderPage() {
  return (
    <OrderPageStyled>
      <Layout></Layout>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
