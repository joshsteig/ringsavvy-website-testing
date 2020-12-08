import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

export const BlogCardWrapper = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;

  h3 {
    margin-top: 2rem;
    font-size: 1.125rem;
    line-height: 1.5;
  }
`;

export const ImageWrapper = styled(Img)`
  min-height: 150px;
  position: relative;
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);
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
