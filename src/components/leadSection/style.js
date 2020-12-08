import styled, { css } from 'styled-components';

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  ${(props) =>
    !props.horizontal &&
    css`
      flex-direction: column;
    `}

  @media(max-width:767px) {
    flex-wrap: wrap;
  }
`;

export const LeftWrapper = styled.div`
  width: 100%;
  max-width: 500px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const RightWrapper = styled(LeftWrapper)`
  margin-left: auto;
  max-width: 580px;
`;

export const Title = styled.h2`
  font-size: 3rem;

  @media (max-width: 767px) {
    font-size: 2rem;
  }
  ${(props) =>
    props.fontSize &&
    css`
      font-size: ${props.fontSize}rem;
    `}
`;

export const Description = styled.p`
  ${(props) =>
    props.paddingTop &&
    css`
      padding-top: ${props.paddingTop}rem;
      color: ${props.color};
      margin: ${props.margin ? props.margin : 'inherit'};
    `}
`;
