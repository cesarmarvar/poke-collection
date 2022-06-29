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
// margin: 0 auto;
&:hover {
    background: #2DB2DB;
}
`