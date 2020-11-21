import styled from 'styled-components';

export const Wrapper = styled.div`
  display: ${(props) => props.display || 'block'};
  margin: auto;
  max-width: 980px;
`;
