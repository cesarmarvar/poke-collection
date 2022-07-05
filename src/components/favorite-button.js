import { AiOutlineStar } from "react-icons/ai";
import styled from "@emotion/styled";

const Container = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 8px 16px;
background: #2D9CDB;
box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
border-radius: 4px;
border: none;
color: white;
cursor: pointer;
font-family: Source Code Pro;
font-weight: 700;
margin: 0 auto;
gap: 0.5rem;
:hover {
  background: #006bb3;
}
:active {
  margin-top: 4px;
  padding-top: 6px;
}`

export function FavoriteButton({children}) {

  return(
    <Container>
      <AiOutlineStar size="20px"/>
      <text>{children}</text>
    </Container>
  )
}