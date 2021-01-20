import styled from 'styled-components';

export const Value = styled.div`
  max-width: 400px;
  margin: 0 0 26px;

  &:last-of-type {
    margin: 0;
  }

  @media ${({ theme }) => theme.global.mediaQueries.md} {
    max-width: none;
  }
`;

export const Heading = styled.h4`
  color: ${({ theme }) => theme.global.colors.primary};
  margin: 0 0 0.8em;
`;

export const Illustration = styled.img`
  border-radius: 5px;
  box-shadow: 0 0 25px rgba(0, 0, 0, 0.12);

  @media ${({ theme }) => theme.global.mediaQueries.md} {
    display: none;
  }
`;
