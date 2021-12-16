import { wrap } from 'lodash';
import React from 'react';
import { StyledLink } from '../button';
import { Wrapper } from '../wrapper';

import * as Styled from './style';

const PromoBanner = () => {
  return (
    <Styled.promo>
      Limited Time Offer! Get 400 minutes for free here.
      <StyledLink secondary to='/sign-up/' margin-left='3px'>
        Try for free
      </StyledLink>
    </Styled.promo>
  );
};
export default PromoBanner;
