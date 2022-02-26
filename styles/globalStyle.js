import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        font-size: 100%;
        --width: 600px;
        --font-gray-1: #828282;
    }

    html, body, #__next {
    min-height: 100vh;
  }
`;

export default GlobalStyle;
