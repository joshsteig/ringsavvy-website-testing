import styled, { css } from 'styled-components';
import { Link } from 'gatsby'

export const BlogCardWrapper = styled(Link)`
  width: 100%;
  h3 {
    margin-top: 2rem;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ImageWrapper = styled.div`
  min-height: 150px;
  background-size: cover;
  background-position: center;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);
  ${(props) =>
    props.backgroundImage &&
    css`
      background-image: url(${props.backgroundImage});
    `}
  ${(props) =>
    props.overLay &&
    css`
      &::before {
        border-radius: 5px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(39, 39, 39, 0.88);
      }
    `}
`;
