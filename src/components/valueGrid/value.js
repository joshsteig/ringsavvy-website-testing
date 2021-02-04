import React from 'react';
import { OneThird } from '../globals';
import * as Styled from './style';

const Value = ({ value, isFirst }) => {
  const { heading, content, ctaLink } = value;
  return (
    <OneThird isFirst={isFirst}>
      <Styled.ValueLink to={ctaLink}>{heading}</Styled.ValueLink>
      <p>{content}</p>
    </OneThird>
  );
};

export default Value;
