import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

export const PostContainer = styled.div`
  margin-bottom: 60px;
`;

export const PostThumbnail = styled(Img)`
  border-radius: 10px;
  box-shadow: 0 19px 70px 0 rgba(0, 0, 0, 0.12);
  height: 230px;
  margin-bottom: 32px;
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.global.colors.black};
  font-family: ${({ theme }) => theme.global.fonts.serif};
  font-weight: bold;

  &:hover {
    color: ${({ theme }) => theme.global.colors.primary};
  }
`;

export const PostLink = styled(StyledLink)`
  font-size: 25px;
`;

export const MoreLink = styled(StyledLink)`
  color: ${({ theme }) => theme.global.colors.black};
  font-family: ${({ theme }) => theme.global.fonts.serif};
  font-size: 18px;
  font-weight: bold;
`;
