import React from 'react';

import * as Styled from './style';

const Image = ({ alt, fixed }) => (
  <figure>
    <Styled.Image alt={alt} fixed={fixed} />
  </figure>
);

export default Image;
