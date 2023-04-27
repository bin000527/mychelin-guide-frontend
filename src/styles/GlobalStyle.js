import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    box-sizing: border-box;
    min-height: 100%;

    --primary-color: #d21312;
    
    [data-theme='light'] {
      --bg-color: #fff;
      --font-color: #000;
    }
    
    [data-theme='dark'] {
      --bg-color: #22272e;
      --font-color: #fff;
    }
  }

  #root {
    min-height: 100%;
    /* max-width: 1280px;
    margin: 0 auto; */
  }

  html {
    height: 100%;
  }

  a {
  color: inherit;
  text-decoration: none;
  }

  * {
    box-sizing: inherit;
    font-family: 'Noto Sans KR', sans-serif;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  code {
    font-family: monospace;
  }
`;

export default GlobalStyle;
