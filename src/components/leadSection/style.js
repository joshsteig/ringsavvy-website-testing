import styled, { css } from 'styled-components';

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  ${(props) =>
    !props.horizontal &&
    css`
      flex-direction: column;
    `}
`;

export const LeftWrapper = styled.div`
  width: 50%;
`;

export const RightWrapper = styled(LeftWrapper)`
  margin-left: auto;
`;

export const Title = styled.h2`
  font-size: 3rem;
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
