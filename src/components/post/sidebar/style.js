import styled from 'styled-components';
import { Link } from 'gatsby';

export const P = styled.p`
  font-size: ${(props) => props.theme.post.fontSizes.sm};
`;

export const Aside = styled.aside`
  margin-left: auto;
  width: 335px;

  @media ${(props) => props.theme.global.mediaQueries.lg} {
    margin-right: auto;
    width: 100%;
  }
`;

export const Section = styled.section`
  border-radius: ${(props) => (props.hasShadow ? '10px' : null)};
  box-shadow: ${(props) =>
    props.hasShadow ? '0 6px 15px rgba(0, 0, 0, .09)' : null};
  margin-bottom: 36px;
  padding: ${(props) => (props.hasShadow ? '36px 28px' : null)};
`;

export const SectionTitle = styled.h4`
  margin-top: 0;
`;

export const UnorderedList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const RecentPostItem = styled.li`
  border-bottom: 1px solid #e8e8e8;
  font-size: ${(props) => props.theme.post.fontSizes.sm};
  margin: 0;
  padding: 12px 0;

  &:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
  }

  &:first-of-type {
    padding-top: 0;
  }
`;

export const Date = styled.span`
  display: block;
  font-size: ${(props) => props.theme.post.fontSizes.xs};
`;

export const ArticleLink = styled(Link)`
  color: ${(props) => props.theme.global.colors.primary};
  text-decoration: none;
`;
