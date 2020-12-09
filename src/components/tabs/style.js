import styled, { css } from 'styled-components';
import { Button } from '../button/style';

export const ContentWrapper = styled.div`
  padding-bottom: 30px;
  width: 100%;
  ${(props) =>
    props.horizontal &&
    css`
      display: flex;
      @media (max-width: 767px) {
        flex-direction: column;
      }
    `}
`;

export const LeftContentWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  ${(props) =>
    props.horizontal &&
    css`
      width: 40%;
    `}

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const RightContentWrapper = styled(LeftContentWrapper)`
  margin-left: auto;
  max-width: 580px;
  ${(props) =>
    props.horizontal &&
    css`
      width: 60%;
      @media (max-width: 767px) {
        width: 100%;
      }
    `}
`;

export const TabWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const LeftTabWrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const RightTabWrapper = styled(LeftTabWrapper)`
  justify-content: center;
  padding: 0 0 0 4rem;

  @media (max-width: 767px) {
    padding: 0;
  }
`;

export const TabFeatureBox = styled.div`
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

  @media (min-width: 768px) {
    ${(props) =>
      props.active &&
      css`
        background: #0abe51;
        color: #fff;

        h3 {
          color: #fff;
        }
      `}
  }

  @media (max-width: 767px) {
    ${(props) =>
      props.activeMobile &&
      css`
        background: #0abe51;
        color: #fff;

        h3 {
          color: #fff;
        }
      `}
  }

  @media (max-width: 767px) {
    padding: 1rem 2rem;
  }
`;

export const TabCount = styled.span`
  font-size: 1.75rem;
  margin-right: 1.5rem;
  font-family: 'Merriweather', serif;
  opacity: 0.5;
`;

export const TabRightContent = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ContentDescription = styled.p`
  ${(props) =>
    props.paddingTop &&
    css`
      padding-top: ${props.paddingTop}rem;
      color: ${props.color};
      margin: ${props.margin ? props.margin : 'inherit'};
    `}
`;

export const TabContent = styled(ContentDescription)`
  span {
    display: block;
    margin-top: 1rem;
  }
`;

export const TabCTAButton = styled(Button)`
  width: 50%;
  margin-top: 2rem;
  white-space: nowrap;
  padding: 0.75rem 2.5rem;

  @media (max-width: 767px) {
    margin-top: 0;
  }
`;

export const TabMobileContentBox = styled.div`
  display: none;

  @media (max-width: 767px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
    transition: all 0.6s;
    height: 0;
    overflow: hidden;
    ${(props) =>
      props.active &&
      css`
        margin-bottom: 2rem;
        height: 100%;
        transition: all 0.4s;
        overflow: visible;
      `}
  }
`;
