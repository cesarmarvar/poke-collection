import { Input } from "../components/input";
import { BlueButton } from "../styles/typography";
import { login } from "../services/sessions-services";
import { useState } from "react";
import { H1 } from "../styles/typography";

export function LoginPage() {

  const [ user, setUser ] = useState({
    email: "",
    password: "",
  })

  const {email, password} = user;

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event.target)
    login(user)
    .then(console.log)
    .catch(console.log)
  }
  
  function handleChange(event) {
    const { name, value } = event.target;
    setUser({...user, [name]: value})
  }

return(
  <>
    <H1>Welcome to Poke Collection</H1>
    <form onSubmit={handleSubmit}>
      <Input 
        name="email" 
        type="email" 
        value={email}
        placeholder="example@mail.com"
        onChange={handleChange}
        label="Email"
        /><br />
      <Input 
        name="password"
        type="password"
        value={password}
        placeholder="*******"
        onChange={handleChange}
        label="Password" 
        /><br />
      <BlueButton type="submit"> Login</BlueButton>
    </form>
  </>
  )
}