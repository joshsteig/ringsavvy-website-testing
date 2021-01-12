import styled, { css } from 'styled-components';

export const Section = styled.div`
  padding: 60px 0;
  position: relative;

  :last-of-type {
    padding-bottom: 0;
  }

  @media only screen and (max-width: 860px) {
    padding: 30px 5%;
  }

  @media only screen and (max-width: 980px) {
    padding: 30px 5%;
  }

  ${({ hasDiag }) =>
    hasDiag &&
    css`
      :after {
        content: '';
        background-color: #f9f9f9;
        height: 62%;
        position: absolute;
        transform: skewY(8deg);
        top: 120px;
        width: 100%;
        z-index: -1;
      }
    `}
`;
