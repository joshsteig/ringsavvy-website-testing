import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { hasArrow } from '../globals';

export const ValueLink = styled(Link)`
  color: ${({ theme }) => theme.global.colors.black};
  display: block;
  font-family: ${({ theme }) => theme.global.fonts.serif};
  font-size: ${({ theme }) => theme.global.fontSizes.lg};
  font-weight: bold;
  margin-bottom: 1em;

  ${({ isLink }) =>
    isLink &&
    css`
      color: ${({ theme }) => theme.global.colors.primary};
      font-size: ${({ theme }) => theme.global.fontSizes.base};
      text-decoration: none;

      ${hasArrow}
    `}
`;
