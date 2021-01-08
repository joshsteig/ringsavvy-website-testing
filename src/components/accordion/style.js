import styled, { css } from 'styled-components';
import { TabList, Tab } from '../tabs/style';

export const AccordionList = styled.ul`
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;

  @media ${({ theme }) => theme.global.mediaQueries.md} {
    display: block;
  }
`;

export const AccordionTab = styled.div`
  align-items: center;
  background: ${({ theme }) => theme.global.colors.white};
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);
  color: #7a7a7a;
  cursor: pointer;
  display: flex;
  font-family: ${({ theme }) => theme.global.fonts.serif};
  font-size: ${({ theme }) => theme.global.fontSizes.md};
  font-weight: 700;
  line-height: 1.3em;
  margin: 0 0 20px;
  max-width: 480px;
  padding: 1.444444em;
  transition: all 0.2s;
  width: 100%;

  ${({ isOpen }) =>
    isOpen &&
    css`
      background: ${({ theme }) => theme.global.colors.primary};
      color: ${({ theme }) => theme.global.colors.white};
    `}

  @media ${({ theme }) => theme.global.mediaQueries.sm} {
    font-size: 16px;
  }
`;
