import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: auto;
  max-width: 980px;
  position: relative;
  @media ${(props) => props.theme.global.mediaQueries.lg} {
    flex-wrap: ${(props) => (props.flex ? 'wrap' : null)};
    max-width: none;
  }
`;

export const GappedWrapper = styled.div`
  padding: ${(props) =>
    props.padding === 'large' ? '6rem 1.25rem' : '2rem 1.25rem'};
  @media (max-width: 767px) {
    padding: ${(props) =>
      props.padding === 'large' ? '3rem 1.25rem' : '1rem 1.25rem'};
  }
`;