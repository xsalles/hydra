import { createGlobalStyle } from "styled-components";
import Montserrat from "../assets/fonts/Montserrat-VariableFont_wght.ttf";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Montserrat";
  src: url(${Montserrat}) format(truetype);
}

   * {
    font-family: "Montserrat";
  }
  
  
  a {
    text-decoration: none;
  }

  button{
    cursor: pointer;
  }

  :root{
    --font-primary: #343045;
    --bg-primaryStart: #8176AF;
    --bg-primaryEnd: #C0B7E8;
  }
`;
