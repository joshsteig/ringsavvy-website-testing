import styled from 'styled-components';

export const Wrapper = styled.div`
  display: ${(props) => (props.flex ? 'flex' : 'block')};
  margin: auto;
  max-width: 980px;
  position: relative;

  @media ${({ theme }) => theme.global.mediaQueries.lg} {
    flex-wrap: ${(props) => (props.flex ? 'wrap' : null)};
    max-width: none;
  }
`;
