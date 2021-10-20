import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #6c757d;
    --secondary-color: #6c757d;
    --bg-dark-color: #10121a;
    --border-color: #2e344e;
    --bg-light-color: #f1f1f1;
    --white-color: #fff;
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --sidebar-dark-color: #191d2b;
  }
   
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  body {
    background-color: var(--bg-dark-color);
  }
`;

export default GlobalStyle;
