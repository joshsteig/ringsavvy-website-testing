import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: auto;
  max-width: 1150px;
  position: relative;

  @media ${(props) => props.theme.global.mediaQueries.lg} {
    flex-wrap: ${(props) => (props.flex ? 'wrap' : null)};
    max-width: none;
    padding: 0 5%;
  }
`;

export const GappedWrapper = styled.div`
  padding: ${(props) =>
    props.padding === 'large' ? '6rem 1.25rem' : '3rem 1.25rem'};
`;