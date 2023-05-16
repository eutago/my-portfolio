import styled, { css } from "styled-components";
import BaseText from "./Base";

export const StyledText = styled(BaseText)`
  font-family: "Poppins", sans-serif;
  font-weight: ${({ fontWeight }) => fontWeight};

  ${({ fontSize }) => {
    switch (fontSize) {
      case "lg": {
        return css`
          font-size: 2em;
        `;
      }
      case "md": {
        return css`
          font-size: 1.5em;
        `;
      }
      case "sm": {
        return css`
          font-size: 1em;
        `;
      }
    }
  }}

  ${({ color }) => {
    switch (color) {
      case "purple": {
        return css`
          color: #5956e9;
        `;
      }
      case "electric": {
        return css`
          color: #ffd109;
        `;
      }
      case "text": {
        return css`
          color: #292930;
        `;
      }
      case "text-gray": {
        return css`
          color: #8a90a2;
        `;
      }
    }
  }}
`;
