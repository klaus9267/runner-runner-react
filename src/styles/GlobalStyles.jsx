import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html {
    height: 100%;
  }
  
  body {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    background-color: #f5f5f5;
    min-height: 100%;
  }
  
  ul {
    padding: 0px;
    margin: 0px;
    list-style: none;
  }

  button {
    background-color: #24c3dc;
    color: white;
    font-style: normal;
    border-radius: 4px;
    border: none;
    font-family: "Roboto";
    letter-spacing: -0.05em;
  }

  button:hover {
    background-color: #2ae3ff;
  }
  
  button:active {
    background-color: #1d99ac;
  }
`;

export default GlobalStyles;
