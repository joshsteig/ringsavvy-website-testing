import styled, { css } from 'styled-components';
import arrow from '../../assets/images/has-arrow.svg';

// TODO: create flex components: https://medium.com/swlh/create-a-responsive-grid-with-react-flexbox-styled-components-f7a55f607480
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  ${({ wrap }) =>
    wrap &&
    css`
      flex-wrap: wrap;
    `}

  ${({ center }) =>
    center &&
    css`
      align-items: center;
      justify-content: center;
    `}

  ${({ alignCenter }) =>
    alignCenter &&
    css`
      align-items: center;
    `}

  @media ${({ theme }) => theme.global.mediaQueries.md} {
    flex-wrap: wrap;
  }
`;

export const FlexCol = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;

  ${({ center }) =>
    center &&
    css`
      align-items: center;
      justify-content: center;
    `}

  ${({ justifyBetween }) =>
    justifyBetween &&
    css`
      justify-content: space-between;
    `}

  ${({ alignCenter }) =>
    alignCenter &&
    css`
      align-items: center;
    `}
`;

// TODO: come up with better grid system
export const OneHalf = styled.div`
  width: 48.717948717948715%;
  margin-left: 2.564102564102564%;

  ${({ isFirst }) =>
    isFirst &&
    `
      margin-left: 0;
    `}

  @media ${({ theme }) => theme.global.mediaQueries.md} {
    margin: 0;
    width: 100%;
  }
`;

export const OneThird = styled.div`
  width: 31.623931623931625%;
  margin-left: 2.564102564102564%;

  ${({ isFirst }) =>
    isFirst &&
    `
      margin-left: 0;
    `}

  @media ${({ theme }) => theme.global.mediaQueries.md} {
    margin: 0;
    width: 100%;
  }
`;

export const BaseUnorderedList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const ContentContainer = styled.div`
  max-width: ${(props) => props.maxWidth || '580px'};
`;

export const hasBackgroundBox = () => css`
  &:before {
    background: #0abe51;
    border-radius: 10px 0 0 10px;
    bottom: 0;
    content: '';
    left: 60%;
    max-width: 40%;
    min-width: 0;
    position: absolute;
    right: 0;
    top: 0;
  }
`;

export const hasArrow = () => css`
  position: relative;

  &:after {
    content: url(${arrow});
    left: 16px;
    position: relative;
    top: 2px;
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    &:after {
      left: 22px;
    }
  }
`;
