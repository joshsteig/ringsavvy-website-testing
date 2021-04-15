import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;
  width: 100%;

  ${({ horizontal }) =>
    horizontal &&
    css`
      display: flex;

      @media ${({ theme }) => theme.global.mediaQueries.md} {
        flex-direction: column;
      }
    `}

  ${({ centered }) =>
    centered &&
    css`
      align-items: center;
      display: flex;
      flex-direction: column;
      text-align: center;
    `}
`;

export const Heading = styled.h2`
  max-width: 780px;
  width: 100%;

  ${({ horizontal }) =>
    horizontal &&
    css`
      margin-right: 20px;
      width: 40%;
    `}

  ${({ primary }) =>
    primary &&
    css`
      width: 100%;
      max-width: 500px;
    `}

  @media ${({ theme }) => theme.global.mediaQueries.md} {
    width: 100%;
  }
`;

export const Content = styled.div`
  max-width: 780px;

  p:last-of-type {
    margin-bottom: 0;
  }

  ${({ horizontal }) =>
    horizontal &&
    css`
      margin-top: 30px;
      width: 60%;
    `}

  ${({ primary }) =>
    primary &&
    css`
      margin-left: auto;
      max-width: 580px;
    `}

  @media ${({ theme }) => theme.global.mediaQueries.md} {
    width: 100%;
  }
`;
