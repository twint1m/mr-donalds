import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    font-size: 20px;
    color:black;
  }
  a {
    text-decoration: none;
    color: inherit;
    padding: 0;
    margin: 0;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  h1,h2,h3,h4,h5,h6 {
    font-family: Pacifico, sans-serif;
    padding: 0;
    margin: 0;
  }
  p {
    padding: 0;
    margin: 0;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  button {
    cursor: pointer;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;