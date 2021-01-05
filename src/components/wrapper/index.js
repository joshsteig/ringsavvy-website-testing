import styled from 'styled-components';

export const Wrapper = styled.div`
  display: ${({ flex }) => (flex ? 'flex' : 'block')};
  margin: auto;
  max-width: 980px;
  position: relative;

  @media ${({ theme }) => theme.global.mediaQueries.lg} {
    flex-wrap: ${({ flex }) => flex && 'wrap'};
    max-width: none;
  }
`;
