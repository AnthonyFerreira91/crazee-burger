import { Link, useParams } from "react-router-dom";
import Input from "../../design-system/Input";

export default function OrderPage() {
  const { firstname } = useParams();
  return (
    <div>
      <h1>Bonjour {firstname}</h1>
      <br />
      <Link to="/">
        <Input type="button" value="Déconnexion" />
      </Link>
    </div>
  );
}
