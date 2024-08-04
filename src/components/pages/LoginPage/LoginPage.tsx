import { ChangeEvent, FormEvent, useState } from "react";

export default function LoginPage() {
   const [firstname, setFirstname] = useState("");

   const handleChange = (event: ChangeEvent<HTMLInputElement>) => setFirstname(event.target.value);

   const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      alert(`Bonjour ${firstname}`);
      setFirstname("");
   }

   return (
      <>
         <h1>Bienvenue chez nous !</h1>
         <form onSubmit={handleSubmit}>
           <h2>Connectez-vous</h2>
           <input type="text" onChange={handleChange} value={firstname} placeholder="Entre votre prénom..." required/>
           <button type="submit">Accédez à votre espace</button>
         </form>
      </>
   )
}