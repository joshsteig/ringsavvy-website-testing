import styled, { css } from 'styled-components';
import { FlexCol } from '../globals';
import { StyledLink } from '../button';

export const Plan = styled.div`
  background: ${({ theme }) => theme.global.colors.white};
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);
  display: flex;
  flex: 1;
  padding: 2.25rem 1.75rem;
  position: relative;
  text-align: center;

  ${({ position }) =>
    position === 'left' &&
    css`
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    `}

  ${({ position }) =>
    position === 'center' &&
    css`
      margin-top: -15px;
      margin-bottom: -15px;
      border-radius: 10px;
      z-index: 10;
    `}

  ${({ position }) =>
    position === 'right' &&
    css`
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    `}
`;

export const Content = styled(FlexCol)`
  margin: auto;
  min-height: 430px;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.global.colors.primary};
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 0.5em;
`;

export const Minutes = styled.h3`
  margin: 0 0 0.5714em;
`;

export const Description = styled.p`
  margin: 0;
`;

export const Price = styled.span`
  color: ${({ theme }) => theme.global.colors.black};
  font-family: ${({ theme }) => theme.global.fonts.serif};
  font-size: ${({ theme }) => theme.global.fontSizes.lg};
  font-weight: 700;
  margin: 1.2em 0;
`;

export const listContainer = styled.div`
  margin: auto auto 0;
`;

export const Includes = styled.p`
  color: ${({ theme }) => theme.global.colors.black};
`;

export const List = styled.ul`
  font-size: ${({ theme }) => theme.global.fontSizes.sm};
  margin: 0;
  text-align: left;
  padding-left: 20px;
`;

export const ListItem = styled.li`
  margin-bottom: 0.7em;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Button = styled(StyledLink)`
  margin: 2.25em auto 0;
`;
