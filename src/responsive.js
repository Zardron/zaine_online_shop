import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }

    @media only screen and (max-width: 390px) {
      ${props}
    }

    @media only screen and (max-width: 414px) {
      ${props}
    }

    @media only screen and (max-width: 480px) {
      ${props}
    }
  `;
};
