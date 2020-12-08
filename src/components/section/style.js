import styled from 'styled-components';

export const Section = styled.div`
  padding: 60px 0;
  position: relative;

  :last-of-type {
    padding-bttom: 0;
  }

  @media only screen and (max-width: 860px) {
    padding: 30px 5%;
  }

  @media only screen and (max-width: 980px) {
    padding: 30px 5%;
  }
`;
