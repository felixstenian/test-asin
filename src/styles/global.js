import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: "Ubuntu", "Roboto", sans-serif;
}

*:focus {
  outline: 0;
}

html,
body,
#root {
  min-height: 100vh;
}

body {
  -webkit-font-smoothing: antialiased !important;
  background-color: #FFFFFF;

  background-image: url('../assets/background-pokedex.svg');
  background-repeat: no-repeat;
  background-position: 100% 0%;
}

button {
  border: 0;
  background-color: transparent;
  cursor: pointer;
}

`;
