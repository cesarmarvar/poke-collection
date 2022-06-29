/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";


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