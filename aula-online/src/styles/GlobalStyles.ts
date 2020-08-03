import { createGlobalStyle } from 'styled-components';



export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Roboto', sans-serif;
  }

  :root {
    --primary: #f7edd2;
    --secondary: #091928;
    --tertiary: #99c1b9;
    --contrastText: #0b1828;
    --darkButtonTextColor: #fffdf7;
    --lightButtonTextColor: #0b1828;
  }
`;