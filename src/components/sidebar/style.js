import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { BaseUnorderedList, hasArrow } from '../globals';

export const Aside = styled.aside`
  margin-left: auto;
  width: 335px;

  @media ${({ theme }) => theme.global.mediaQueries.lg} {
    display: none;
  }
`;

export const Section = styled.section`
  border-radius: ${(props) => (props.hasShadow ? '10px' : null)};
  box-shadow: ${(props) =>
    props.hasShadow ? '0 6px 15px rgba(0, 0, 0, .09)' : null};
  margin-bottom: 36px;
  padding: ${(props) => (props.hasShadow ? '36px 28px' : '0 28px')};
`;

export const Title = styled.h4`
  margin-top: 0;

  ${({ hasLine }) =>
    hasLine &&
    css`
      border-bottom: 1px solid #e8e8e8;
      padding: 0 0 0.8em;
    `}
`;

export const Heading = styled.p`
  color: ${({ theme }) => theme.global.colors.black};
  font-family: ${({ theme }) => theme.global.fonts.serif};
  font-size: ${({ theme }) => theme.global.fontSizes.md};
  margin-bottom: 0.75em;
`;

export const P = styled.p`
  font-size: ${({ theme }) => theme.post.fontSizes.sm};
`;

export const CtaLink = styled(Link)`
  color: ${({ theme }) => theme.global.colors.primary};
  font-family: ${({ theme }) => theme.global.fonts.serif};
  font-size: ${({ theme }) => theme.global.fontSizes.md};
  text-decoration: none;

  ${hasArrow}
`;

export const List = styled(BaseUnorderedList)`
  font-size: ${({ theme }) => theme.global.fontSizes.sm};
`;

export const ListItem = styled.li`
  margin-bottom: 1.625rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const serviceLink = styled.li`
  border-bottom: 1px solid #e8e8e8;
  padding-bottom: 1em;
  margin-bottom: 1em;

  &:last-of-type {
    border-bottom: none;
  }

  a {
    color: ${({ theme }) => theme.global.colors.primary};
    font-family: ${({ theme }) => theme.global.fonts.serif};
    font-size: ${({ theme }) => theme.global.fontSizes.md};
    text-decoration: none;

    ${hasArrow}
  }
`;
