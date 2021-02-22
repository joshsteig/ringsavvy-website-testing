import styled from 'styled-components';
import { Link } from 'gatsby';
import { hasArrow, OneThird } from '../globals';

export const Industry = styled(OneThird)`
  margin-bottom: 50px;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.global.colors.black};
  font-family: ${({ theme }) => theme.global.fonts.serif};
  font-size: ${({ theme }) => theme.global.fontSizes.md};
  font-weight: bold;
  margin-bottom: 0.75em;
`;

export const CtaLink = styled(Link)`
  color: ${({ theme }) => theme.global.colors.primary};
  font-family: ${({ theme }) => theme.global.fonts.serif};
  font-size: ${({ theme }) => theme.global.fontSizes.base};
  font-weight: bold;
  text-decoration: none;

  ${hasArrow}
`;
