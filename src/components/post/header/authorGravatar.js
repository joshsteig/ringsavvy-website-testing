import React from 'react';
import { GravatarImage } from './style';

export default ({ gravatar }) => (
  <GravatarImage alt={gravatar.title} fluid={gravatar.fluid} />
);
