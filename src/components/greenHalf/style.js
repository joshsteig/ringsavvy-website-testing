import styled from 'styled-components';
import { FlexRow } from '../globals';

export const GreenBg = styled(FlexRow)`
  background: ${({ theme }) => theme.global.colors.primary};
  color: ${({ theme }) => theme.global.colors.white};
  flex: 1;
  font-family: ${({ theme }) => theme.global.fonts.serif};
  font-size: ${({ theme }) => theme.global.fontSizes.lg};
  height: 100vh;
  padding: 0 18%;
  position: relative;
  text-align: center;
  width: 100%;
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
`;
