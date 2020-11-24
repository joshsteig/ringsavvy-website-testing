import React from 'react';
import { Image } from './style';

export default ({ alt, fluid }) => (
  <figure>
    <Image alt={alt} fluid={fluid} />
  </figure>
);
