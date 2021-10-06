import { createGlobalStyle } from "styled-components";
import { COLORS } from "../constants/constants";

const GlobalStyles = createGlobalStyle`
  * {
    padding:0;
    margin: 0;
      color: ${COLORS.white};

    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    background-color: ${COLORS.black};
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
  }
`;

export default GlobalStyles;
