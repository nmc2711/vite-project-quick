import { createGlobalStyle } from "styled-components";
import reset from 'styled-reset';

export default createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }

  html,
  body {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Spoqa Han Sans Neo', -apple-system, 'sans-serif' !important;
    overscroll-behavior-y: contain;
    position: fixed;
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    flex-grow: 1;
    font-size: 14px;
    font-weight: 400;
  }

  #root {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior-y: contain;
  }

  u {
    text-decoration: underline;
  }

  input, button {
    &:focus,
    &:active {
      outline: none;
    }
  }

  input, textarea {
    -webkit-appearance: none;
  }

  button {
    margin: 0;
    outline: none;
    border: none;
    border-radius: 0;
    font-family: 'Spoqa Han Sans Neo', -apple-system, sans-serif !important;
  }

  select, input, textarea {
    outline: none;
    font-family: 'Spoqa Han Sans Neo', -apple-system, sans-serif !important;
  }
`;