import styled from 'styled-components';

export const Title = styled.h2`
  width: 60%;
  font-size: 3rem;
`;

export const BlogsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;
