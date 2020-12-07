import styled from 'styled-components';

export const BlogMain = styled.div`
  h2 {
    width: 60%;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    h2 {
      width: 100%;
    }
  }
`;

export const BlogsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
