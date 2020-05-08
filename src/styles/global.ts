import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &::-webkit-scrollbar {
      display: none;
    }
    
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: Helvetica, sans-serif;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #root {
    height: 100%;
  }
`;
