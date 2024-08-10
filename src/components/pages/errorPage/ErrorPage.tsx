import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
   const navigate = useNavigate();

   return (
      <div>
         <h1>ErrorPage</h1>
         <br />
         <button onClick={() => navigate("/")}>Retourner à la page d'accueil</button>
      </div>
   )
}
