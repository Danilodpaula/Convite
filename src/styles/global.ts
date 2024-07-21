import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0px;
    margin: 0px;
    outline: 0px;
    box-sizing: border-box;
  }

  body {

  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  li {
    text-decoration: none;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  .css-0{
    display: flex;
  }

  .rbc-row.rbc-month-header{
  text-transform: uppercase;
  border-radius: 10px;
  font-family: Roboto;
  text-align: center;
  color: #274488;
  }

  /* button {
    background: blue;
  } */
`;
