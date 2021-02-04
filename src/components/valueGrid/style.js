import styled from 'styled-components';
import { Link } from 'gatsby';
import { hasArrow } from '../globals';

export const ValueLink = styled(Link)`
  color: ${({ theme }) => theme.global.colors.primary};
  display: block;
  font-family: ${({ theme }) => theme.global.fonts.serif};
  font-weight: 700;
  text-decoration: none;
  margin-bottom: 1em;

  ${hasArrow}
`;
