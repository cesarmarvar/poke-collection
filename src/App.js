import { useState } from "react";
import { LoginPage } from "./pages/login-page";
import { SignupPage } from "./pages/signup-page";
import { CustomLink } from "./styles/typography";

function App() {
  const [ showLogin, setShowLogin ] = useState(true)


  return (
    <>
      <SignupPage />
      {/* <LoginPage /> */}
      <CustomLink>link</CustomLink>
    </>
  );
}

export default App;
