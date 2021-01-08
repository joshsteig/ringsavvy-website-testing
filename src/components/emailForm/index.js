import React from 'react';
import { StyledLink } from '../button';
import * as Styled from './style';

const EmailForm = () => (
  <Styled.EmailCTA>
    <Styled.HalfWrapper>
      <h3>Want to revisit this later?</h3>
      <p>Let us send you our company brochure.</p>
    </Styled.HalfWrapper>
    <Styled.HalfWrapper>
      <Styled.FormWrapper>
        <Styled.Input type='email' placeholder='Email Address' />
        <StyledLink padding='medium' $primary to='/'>
          Send
        </StyledLink>
      </Styled.FormWrapper>
    </Styled.HalfWrapper>
  </Styled.EmailCTA>
);

export default EmailForm;
