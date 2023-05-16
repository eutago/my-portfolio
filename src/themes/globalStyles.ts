import { createGlobalStyle } from "styled-components";

export const StyledGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    background-color: ${({ theme }) => theme.colors.background};
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.font.colors.text};
    overflow-x: hidden;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: transparent;
    border-radius: 10px;
  }

  ::-webkit-scrollbar {
    width: 3px;
    background-color: rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.purple};
  }
`;
