import { Link } from "react-router-dom";
import Button from "../../ui/Button";

export default function ErrorPage() {
  return (
    <div>
      <h1>ErrorPage</h1>
      <br />
      <Link to="/">
        <Button>Retourner à la page d'accueil</Button>
      </Link>
    </div>
  );
}
