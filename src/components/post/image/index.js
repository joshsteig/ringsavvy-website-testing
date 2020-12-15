import React from 'react';

import * as Styled from './style';

const Image = ({ alt, fluid }) => (
  <figure>
    <Styled.Image alt={alt} fluid={fluid} />
  </figure>
);

export default Image;
