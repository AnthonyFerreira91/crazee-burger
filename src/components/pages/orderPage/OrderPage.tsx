import { useNavigate, useParams } from "react-router-dom"

export default function OrderPage() {
   const navigate = useNavigate();
   const params = useParams();
   return (
      <div>
         <h1>Bonjour {params.firstname}</h1>
         <br />
         <button onClick={() => navigate("/")}>Déconnexion</button>
      </div>
   )
}
