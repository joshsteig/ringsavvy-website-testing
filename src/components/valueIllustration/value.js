import React from 'react';
import * as Styled from './style';

const Value = ({ heading, content }) => (
  <Styled.Value>
    <Styled.Heading>{heading}</Styled.Heading>
    <p>{content}</p>
  </Styled.Value>
);

export default Value;
