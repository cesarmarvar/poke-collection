import { Input } from "../components/input";
import { BlueButton } from "../styles/typography";
import { createUser } from "../services/user-services";
import { useState } from "react";
import { FormContainer, H1, CustomLink } from "../styles/typography";


export function SignupPage() {

  const [ user, setUser ] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
  })

  const {email, password, first_name, last_name} = user;

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(event.target)
    createUser(user)
    .then(console.log)
    .catch(console.log)
  }
  
  function handleChange(event) {
    const { name, value } = event.target;
    setUser({...user, [name]: value})
  }

return(
  <>
    <H1>Welcome to Poke Collection!</H1>
    <form onSubmit={handleSubmit}>
      <Input 
        name="email" 
        type="email" 
        value={email}
        placeholder="example@mail.com"
        onChange={handleChange}
        label="Email"
        />
      <Input 
        name="password"
        type="password"
        value={password}
        placeholder="*******"
        onChange={handleChange}
        label="Password" 
        />
      <Input 
        name="first_name"
        type="first_name"
        value={first_name}
        placeholder="*******"
        onChange={handleChange}
        label="First Name" 
        />
      <Input 
        name="last_name"
        type="last_name"
        value={last_name}
        placeholder="*******"
        onChange={handleChange}
        label="Last Name" 
        />
      <BlueButton type="submit">Create account</BlueButton>
    </form>
  </>
  )
}