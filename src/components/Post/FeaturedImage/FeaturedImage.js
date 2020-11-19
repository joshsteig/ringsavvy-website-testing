import React from 'react';
import { Image } from './FeaturedImage.styles';

export default ({ alt, fluid }) => (
  <figure>
    <Image alt={alt} fluid={fluid} />
  </figure>
);
