import styled, { css } from 'styled-components';

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
