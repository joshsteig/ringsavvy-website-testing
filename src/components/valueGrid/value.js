import React from 'react';
import { Link } from 'gatsby';
import { OneThird } from '../globals';
import * as Styled from './style';

const Value = ({ value, isFirst }) => {
  const { heading, content, ctaLink } = value;
  return (
    <OneThird isFirst={isFirst}>
      <Link to={ctaLink}>{heading}</Link>
      <p>{content}</p>
    </OneThird>
  );
};

export default Value;
