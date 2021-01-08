import styled, { css } from 'styled-components';
import { TabContent } from '../tabs/style';

export const Cta = styled(TabContent)`
  display: block;
  flex-wrap: wrap;
  margin: 0 auto 0 0;
  max-width: 430px;
  position: relative;
  top: 32px;
`;

export const FaqList = styled.ul`
  display: block;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 49%;

  @media ${({ theme }) => theme.global.mediaQueries.md} {
    width: 100%;
  }
`;

// TODO: refactor reused styles from tabs/accordions, etc
export const Faq = styled.li`
  align-items: center;
  background: ${({ theme }) => theme.global.colors.white};
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);
  color: #4d4d4d;
  cursor: pointer;
  display: block;
  font-family: ${({ theme }) => theme.global.fonts.serif};
  font-size: ${({ theme }) => theme.global.fontSizes.base};
  font-weight: 700;
  line-height: 1.3em;
  margin: 0 0 20px;
  max-width: 480px;
  padding: 1.444444em;
  transition: all 0.2s;
  user-select: none;
  width: 100%;

  &:before {
    position: absolute;
    content: '${(props) => (props.isOpen ? '-' : '+')}';
    color: #0abe51;
    right: 40px;
    font-size: 32px;
  }

  &:hover {
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
  }
`;

export const FaqAnswer = styled.div`
  color: #666;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.9em;
  font-weight: normal;
  padding: 0.83333em 0 0 0;

  p {
    margin: 0;
  }
`;
