import styled from 'styled-components';

export const H1 = styled.h1`
  font-size: ${(props) => props.theme.post.fontSizes.xxl};
  line-height: 1.3;
  margin: 0 0 0.5em;
`;

export const H2 = styled.h2`
  font-size: ${(props) => props.theme.post.fontSizes.xl};
  margin: 1.2em 0 0.8em;
`;

export const H3 = styled.h3`
  font-size: ${(props) => props.theme.post.fontSizes.lg};
  margin: 1.2em 0 0.8em;
`;

export const H4 = styled.h4`
  font-size: ${(props) => props.theme.post.fontSizes.md};
  margin: 1.2em 0 0.8em;
`;
