import styled from 'styled-components';
import { StyledLink } from '../button';
import { OneThird } from '../globals';

export const Icon = styled.img`
  height: 50px;
  margin-bottom: 12px;
  width: auto;
`;

export const Service = styled(OneThird)`
  border-radius: 5px;
  box-shadow: 0 0 15px rgb(0, 0, 0, 0.12);
  margin-bottom: 2.25em;
  padding: 2.25em 0.625em;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 2px 6px 0 rgb(0, 0, 0, 0.14);
    transform: translateY(0.16em);
  }
`;

export const P = styled.p`
  font-size: ${({ theme }) => theme.global.fontSizes.sm};
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.global.colors.black};
  font-family: ${({ theme }) => theme.global.fonts.serif};
  font-size: ${({ theme }) => theme.global.fontSizes.lg};
  margin-bottom: 0.6em;
`;

export const CtaLink = styled(StyledLink)`
  font-size: ${({ theme }) => theme.global.fontSizes.sm};
`;
