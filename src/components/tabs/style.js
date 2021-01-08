import styled, { css } from 'styled-components';

export const TabList = styled.ul`
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 50%;

  @media ${({ theme }) => theme.global.mediaQueries.md} {
    display: none;
  }
`;

export const Tab = styled.li`
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
  padding: 2em 1.3333em;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
  }

  ${({ isActive }) =>
    isActive &&
    css`
      background: ${({ theme }) => theme.global.colors.primary};
      color: ${({ theme }) => theme.global.colors.white};
    `}
`;

export const TabContent = styled.article`
  align-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-left: auto;
  max-width: 430px;
  position: relative;
  width: 50%;

  h4 {
    margin-bottom: 1em;
  }

  p:last-of-type {
    margin-bottom: 1.625em;
  }

  @media ${({ theme }) => theme.global.mediaQueries.md} {
    display: none;
  }
`;

export const Count = styled.span`
  font-size: 1.555555em;
  margin: 0 0.857em 0 0;
  opacity: 0.5;
`;
