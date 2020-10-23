import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  #__next {
    min-height: 100vh;
    background-color: #ede7f6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    letter-spacing: -0.5px;
  }

  button {
    cursor: pointer;
    &:enabled:hover {
      filter: brightness(90%);
    }
    &:disabled {
      cursor: default;
      opacity: 0.5;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  .skip-link {
    position: absolute;
    opacity: 0;
    visibility: hidden;
    cursor: default;
  }
`;
