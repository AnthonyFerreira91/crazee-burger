import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
   const [firstname, setFirstname] = useState("");
   const navigate = useNavigate();

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => setFirstname(event.target.value);

   const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      setFirstname("");
      navigate(`/order/${firstname}`);
   }

   return (
      <form onSubmit={handleSubmit}>
         <h2>Connectez-vous</h2>
         <input 
            type="text"
            onChange={handleChange}
            value={firstname}
            placeholder="Entrez votre prénom..."
            required
         />
         <button type="submit">Accédez à votre espace</button>
      </form>
   )
}
