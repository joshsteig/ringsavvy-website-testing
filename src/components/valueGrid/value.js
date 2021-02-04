import React from 'react';
import { OneThird } from '../globals';
import * as Styled from './style';

const Value = ({ value, isFirst }) => {
  const { heading, content, ctaLink } = value;
  return (
    <OneThird isFirst={isFirst}>
      {ctaLink ? (
        <Styled.ValueLink isLink to={ctaLink}>
          {heading}
        </Styled.ValueLink>
      ) : (
        <Styled.ValueLink as='p'>{heading}</Styled.ValueLink>
      )}
      <p>{content}</p>
    </OneThird>
  );
};

export default Value;
