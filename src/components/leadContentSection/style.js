import styled from 'styled-components';

export const LeadContentSection = styled.div`
  margin-bottom: 30px;
  width: 100%;

  ${({ horizontal }) =>
    horizontal &&
    `
      display: flex;

      @media (max-width: 767px) {
        flex-direction: column;
      }
    `}
`;

export const Heading = styled.div`
  width: 100%;
  max-width: 500px;

  ${({ horizontal }) =>
    horizontal &&
    `
      width: 40%;
    `}

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  margin-left: auto;
  max-width: 580px;

  ${({ horizontal }) =>
    horizontal &&
    `
      width: 60%;

      @media (max-width: 767px) {
        width: 100%;
      }
    `}
`;
