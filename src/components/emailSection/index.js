import React from 'react';
import { Wrapper } from '../wrapper';
import { Section } from '../section';
import EmailForm from '../emailForm';
import * as Styled from './style';

const EmailSection = () => (
  <Styled.SectionWithBG>
    <Wrapper>
      <EmailForm />
    </Wrapper>
  </Styled.SectionWithBG>
);

export default EmailSection;
