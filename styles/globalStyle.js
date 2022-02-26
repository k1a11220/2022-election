import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        font-size: 100%;
        --width: 600px;
    }

    html, body, #__next {
    min-height: 100vh;
  }
`;

export default GlobalStyle;
