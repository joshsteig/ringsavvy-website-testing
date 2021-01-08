import styled, { css } from 'styled-components';

// TODO: create flex component: https://medium.com/swlh/create-a-responsive-grid-with-react-flexbox-styled-components-f7a55f607480
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  ${({ wrap }) =>
    wrap &&
    css`
      flex-wrap: wrap;
    `}

  ${({ alignCenter }) =>
    alignCenter &&
    css`
      align-items: center;
    `}
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const Half = styled.div`
  width: 48.717948717948715%;
  margin-left: 2.564102564102564%;

  ${({ isFirst }) =>
    isFirst &&
    `
      margin-left: 0;
    `}
`;
