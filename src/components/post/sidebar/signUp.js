import React from 'react';
import { P, SectionTitle } from './style';

import { StyledLink } from '../../button/style';

export default () => (
  <div>
    <SectionTitle>Try Ring Savvy for free</SectionTitle>
    <P>
      All business owners are encouraged to sign up for a free trial with our
      company.
    </P>
    <StyledLink style={{ width: '100%' }} to='/sign-up'>
      Get Started
    </StyledLink>
  </div>
);
