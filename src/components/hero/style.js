import styled, { css } from 'styled-components';

export const Hero = styled.div`
  background-image: url(${(props) => props.backgroundImage});
  background-position: 0 34%;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 130px 0 80px;
  position: relative;
  color: white;

  ${({ isSecondary }) =>
    isSecondary &&
    css`
      padding: 180px 0 80px;

      h1 {
        margin: 0;
      }
    `}

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

export const Content = styled.div`
  /* padding-bottom: 3rem; */
  max-width: 628px;
  width: 100%;

  h1,
  p {
    color: #fff;
  }

  @media (max-width: 767px) {
    padding-bottom: 0;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;

  @media (max-width: 767px) {
    font-size: 2.3rem;
  }
`;

export const Description = styled.p`
  margin: 0 0 2.2em;
`;

export const CtaWrapper = styled.div`
  display: flex;

  @media (max-width: 767px) {
    flex-wrap: wrap;

    a {
      width: 100%;
    }
  }
`;
