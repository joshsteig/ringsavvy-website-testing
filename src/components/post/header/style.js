import styled from 'styled-components';
import Img from 'gatsby-image';

export const Title = styled.h1`
  font-size: ${(props) => props.theme.post.fontSizes.xxl};
  line-height: 1.4;
  margin: 0 0 0.5em;

  @media ${(props) => props.theme.global.mediaQueries.sm} {
    font-size: ${(props) => props.theme.post.fontSizes.xl};
  }
`;

export const GravatarImage = styled(Img)`
  border: 3px solid ${(props) => props.theme.global.colors.primary};
  border-radius: 100%;
  height: auto;
  margin-right: 20px;
  max-width: none;
  width: 60px;
`;

export const AuthorContainer = styled.div`
  display: flex;
`;

export const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Author = styled.span`
  color: ${(props) => props.theme.global.colors.black};
  font-family: ${(props) => props.theme.global.fonts.serif};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: -2px;
`;

export const Date = styled.span`
  color: ${(props) => props.theme.global.colors.grey};
  font-size: ${(props) => props.theme.global.fontSizes.sm};
`;
