import { BlueButton } from "./styles/typography";

function App() {
  
  function Button() {
    return(<BlueButton>Hola</BlueButton>);
  };
  return (
    <>
      <h1>Poke Collection</h1>
      <Button />
    </>
  );
}

export default App;
