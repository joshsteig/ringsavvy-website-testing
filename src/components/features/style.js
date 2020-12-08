import styled, { css } from 'styled-components';
import { Button } from '../button/style';
import { Description } from '../leadSection/style';

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const LeftWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const RightWrapper = styled(LeftWrapper)`
  justify-content: center;
  padding: 0 0 0 4rem;

  @media (max-width: 767px) {
    padding: 0;
  }
`;

export const FeatureBox = styled.div`
  padding: 1.75rem 1.5rem;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);
  color: #7a7a7a;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: bold;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;

  h3 {
    color: #7a7a7a;
    font-size: 1.125rem;
    margin: 0;
  }
  ${(props) =>
    props.active &&
    css`
      background: #0abe51;
      color: #fff;

      h3 {
        color: #fff;
      }
    `}

  @media(max-width: 767px) {
    padding: 1rem 2rem;
  }
`;

export const Count = styled.span`
  font-size: 1.75rem;
  margin-right: 1.5rem;
  font-family: 'Merriweather', serif;
  opacity: 0.5;
`;

export const RightContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Content = styled(Description)`
  span {
    display: block;
    margin-top: 1rem;
  }
`;

export const CTAButton = styled(Button)`
  width: 50%;
  margin-top: 2rem;
  white-space: nowrap;
  padding: 0.75rem 2.5rem;

  @media (max-width: 767px) {
    margin-top: 0;
  }
`;

export const MobileContentBox = styled(RightContent)`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    margin-bottom: 0;
    transition: height 0.5s, margin-bottom 0.5s, opacity 0.6s;
    height: 0;
    overflow: hidden;
    opacity: 0;
    ${(props) =>
      props.active &&
      css`
        margin-bottom: 2rem;
        opacity: 1;
        height: 100%;
        transition: height 0.5s, margin-bottom 0.5s, opacity 0.6s;
        overflow: visible;
      `}
  }
`;
