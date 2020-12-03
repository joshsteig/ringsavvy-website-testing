import styled from 'styled-components';
import Background from '../../assets/images/hero-bg-overlay.jpg';

export const HeroWrapper = styled.div`
  background-image: url(${Background});
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
`;

export const ContentWrapper = styled.div`
  width: 60%;
  padding-bottom: 3rem;
`;

export const Title = styled.h1`
  color: white;
  font-size: 3rem;
`;

export const Description = styled.p`
  color: white;
`;

export const CtaWrapper = styled.div`
  display: flex;
  margin: 2rem 0;
`;
