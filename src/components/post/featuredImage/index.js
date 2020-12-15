import React from 'react';
import { Image } from './style';

const FeaturedImage = ({ alt, fluid }) => (
  <figure>
    <Image alt={alt} fluid={fluid} />
  </figure>
);

export default FeaturedImage;
