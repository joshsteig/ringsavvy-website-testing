import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

export const PreviewContainer = styled.div`
  margin-bottom: 60px;
`;

export const PostThumbnail = styled(Img)`
  border-radius: 10px;
  box-shadow: 0 19px 70px 0 rgba(0, 0, 0, 0.12);
  height: 230px;
  margin-bottom: 32px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.global.colors.primary};
  }
`;

export const MoreLink = styled(StyledLink)`
  font-family: ${(props) => props.theme.global.fonts.serif};
  font-size: 18px;
  font-weight: bold;
`;
