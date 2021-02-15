import styled from 'styled-components';
import { FlexRow } from '../globals';

export const GreenBg = styled(FlexRow)`
  background: ${({ theme }) => theme.global.colors.primary};
  color: ${({ theme }) => theme.global.colors.white};
  flex: 1;
  font-family: ${({ theme }) => theme.global.fonts.serif};
  font-size: ${({ theme }) => theme.global.fontSizes.lg};
  height: 100vh;
  max-width: 43%;
  padding: 0 8%;
  position: relative;
  text-align: center;

  @media ${({ theme }) => theme.global.mediaQueries.md} {
    flex: 1 100%;
    margin-bottom: 40px;
    max-height: 96px;
    max-width: none;
  }
`;

export const LogoContainer = styled.div`
  left: 50%;
  position: absolute;
  top: 7%;
  transform: translateX(-50%);

  img {
    height: auto;
    width: 201px;
  }
  @media ${({ theme }) => theme.global.mediaQueries.md} {
    left: 0;
    position: relative;
    transform: none;
  }
`;

export const Text = styled.span`
  width: 100%;

  @media ${({ theme }) => theme.global.mediaQueries.md} {
    display: none;
  }
`;
