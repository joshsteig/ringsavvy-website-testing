import styled from 'styled-components';
import { Section } from '../section';
import Watermark from '../../assets/images/logo-watermark.svg';

export const WatermarkSection = styled(Section)`
  &::before {
    background-image: url(${Watermark});
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    height: 100%;
    left: -10vw;
    position: absolute;
    top: 3%;
    width: 90%;
    z-index: -1;
  }
`;

export const Content = styled.div`
  width: 66.66%;
  margin: 0 0 2.75em auto;

  @media (max-width: 767px) {
    width: 100%;
    padding: 0;
  }
`;
