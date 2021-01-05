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

export const AccordionTab = styled(Tab)`
  max-width: none;
  padding: 1.444444em;
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
