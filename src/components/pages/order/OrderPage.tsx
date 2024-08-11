import { Link, useParams } from "react-router-dom"

export default function OrderPage() {
   const { firstname } = useParams();
   return (
      <div>
         <h1>Bonjour {firstname}</h1>
         <br />
         <Link to="/"><button>Déconnexion</button></Link>
      </div>
   )
}
