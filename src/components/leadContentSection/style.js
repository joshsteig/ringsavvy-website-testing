import styled, { css } from 'styled-components';

export const LeadContentSectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const ContentWrapper = styled.div`
  padding-bottom: 30px;
  width: 100%;
`;

export const LeftContentWrapper = styled.div`
  width: 100%;
  max-width: 500px;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const RightContentWrapper = styled(LeftContentWrapper)`
  margin-left: auto;
  max-width: 580px;
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
