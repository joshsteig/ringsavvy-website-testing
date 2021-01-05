import React from 'react';
import { StyledLink } from '../../button';
import * as Styled from './style';

const SignUp = () => (
  <Styled.Section hasShadow>
    <Styled.Title>Try Ring Savvy for free</Styled.Title>
    <Styled.P>
      All business owners are encouraged to sign up for a free trial with our
      company.
    </Styled.P>
    <StyledLink to='/sign-up'>Get Started</StyledLink>
  </Styled.Section>
);

export default SignUp;
