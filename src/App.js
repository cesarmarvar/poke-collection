import styled from "@emotion/styled";


function App() {
  
  const BlueButton = styled("button")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  background: #2D9CDB;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  font-family: Source Code Pro;
  font-weight: 600;
  `
  
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
