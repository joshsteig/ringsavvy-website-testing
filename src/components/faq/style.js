import styled, { css } from 'styled-components';

export const Faq = styled.div`
  margin-bottom: 2.25rem;
`;

export const Question = styled.p`
  color: ${({ theme }) => theme.global.colors.black};
  font-family: ${({ theme }) => theme.global.fonts.serif};
  font-size: ${({ theme }) => theme.global.fontSizes.md};
  font-weight: bold;
  margin-bottom: 0.666666em;
`;

export const Aside = styled.aside`
  font-family: ${({ theme }) => theme.global.fonts.serif};
  font-weight: normal;
  margin-right: auto;

  @media ${({ theme }) => theme.global.mediaQueries.lg} {
    display: none;
  }
`;

export const IndexTitle = styled.p`
  color: ${({ theme }) => theme.global.colors.black};
  font-family: ${({ theme }) => theme.global.fonts.serif};
  font-size: ${({ theme }) => theme.global.fontSizes.md};
  font-weight: bold;
`;

export const Category = styled.li`
  cursor: pointer;
  font-weight: normal;
  margin-bottom: 1em;
  transition: all 0.2s;

  ${({ isActive }) =>
    isActive &&
    css`
      color: pink;
    `}

  &:hover {
    color: ${({ theme }) => theme.global.colors.primary};
  }
`;
