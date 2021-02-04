import styled from 'styled-components';
import { Section } from '../section';
import { hasBackgroundBox } from '../globals';

export const SectionWithBG = styled(Section)`
  margin: 60px 0;

  ${hasBackgroundBox}
`;
