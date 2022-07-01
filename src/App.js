import { createContext, useState } from "react";
import { LoginPage } from "./pages/login-page";
import { SignupPage } from "./pages/signup-page";
import { CustomLink, FormContainer } from "./styles/typography";

const UserContext = createContext();

function App() {
  const [ showLogin, setShowLogin ] = useState(true)

    function handleClick(event) {
      event.preventDefault();
      setShowLogin(!showLogin)
    }

  return (
    <FormContainer>
      {showLogin ? <LoginPage /> : <SignupPage />}
      <CustomLink onClick={handleClick}>{showLogin ? "Create account" : "Login"}</CustomLink>
    </FormContainer>
  );
}

export default App;
