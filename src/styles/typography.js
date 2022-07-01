/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";


export const fonts = {
  primary: `"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif`,
  secondary: `
  Source Code Pro`
};

export const global = css`
body {
font-family: var(primary);
color: black;
background-color: blue;
}
`;

export const BlueButton = styled("button")`
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
:hover {
  background: #006bb3;
}
:active {
  padding: 7px 15px;
}
`

export const CustomLink = styled("a")`
width: 135px;
height: 20px;
font-family: 'Source Code Pro';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 20px;
color: #2D9CDB;
cursor: pointer;
text-align: center;
:hover {
  color: #006bb3
}
:active {
  padding-top: 2px;
}`

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2rem;`

export const H1 = styled.h1`
text-align: center;`

export const InputBox = styled("input")`
display: flex;
flex-direction: row;
align-items: center;
padding: 4px 8px;
gap: 10px;
width: 213px;
height: 28px;
background: #FFFFFF;
box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
border: none;
border-radius: 4px;
font-family: Source Code Pro;
margin-bottom: 2rem;`