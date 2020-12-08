import styled from 'styled-components';

export const HeroWrapper = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-position: 0 34%;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 130px;
  position: relative;
  color: white;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(39, 39, 39, 0.88);
  }

  @media (max-width: 767px) {
    padding-top: 120px;
    padding-bottom: 40px;
    background-position: center;
    padding-right: 5%;
    padding-left: 5%;
  }
`;

export const ContentWrapper = styled.div`
  width: 60%;
  padding-bottom: 3rem;

  @media (max-width: 767px) {
    width: 100%;
    padding-bottom: 0;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 3rem;

  @media (max-width: 767px) {
    font-size: 2.3rem;
  }
`;

export const Description = styled.p`
  color: white;
`;

export const CtaWrapper = styled.div`
  display: flex;
  margin: 2rem 0;

  @media (max-width: 767px) {
    flex-wrap: wrap;

    button {
      width: 100%;
      margin: 0.5rem 0;
    }
  }
`;
