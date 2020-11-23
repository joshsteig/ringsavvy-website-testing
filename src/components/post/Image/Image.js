import React from 'react';
import { Image } from './Image.styles';

export default ({ alt, fluid }) => (
  <figure>
    <Image alt={alt} fluid={fluid} />
  </figure>
);
