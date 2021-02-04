import React from 'react';
import * as Styled from './style';

const Industry = ({ industry, isFirst }) => {
  const { name, description, slug } = industry;

  return (
    <Styled.Industry isFirst={isFirst}>
      <Styled.Name>{name}</Styled.Name>
      <p>{description}</p>
      <Styled.CtaLink to={`/industries/${slug}`}>Learn more</Styled.CtaLink>
    </Styled.Industry>
  );
};

export default Industry;
