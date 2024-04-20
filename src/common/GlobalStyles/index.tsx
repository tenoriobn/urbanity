import { createGlobalStyle } from "styled-components";
import Theme from "./Theme";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${Theme.font.nunito};
    font-weight: 400;
    line-height: normal;
    min-height: 100vh;
  }
`;

export default GlobalStyles;