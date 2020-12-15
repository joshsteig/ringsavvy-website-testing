import React from 'react';

import * as Styled from './style';

const GravatarImage = ({ gravatar }) => (
  <Styled.GravatarImage alt={gravatar.title} fluid={gravatar.fluid} />
);

export default GravatarImage;
