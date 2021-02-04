import React from 'react';
import * as Styled from './style';

const More = ({ learnMoreData }) => (
  <Styled.Section hasShadow>
    <Styled.Title hasLine>More about Ring Savvy</Styled.Title>
    <Styled.List>
      {learnMoreData.map((data, index) => (
        <Styled.ListItem key={index}>
          <Styled.Heading>{data.heading}</Styled.Heading>
          <Styled.P>{data.content}</Styled.P>
          <Styled.CtaLink to={data.ctaLink}>{data.ctaText}</Styled.CtaLink>
        </Styled.ListItem>
      ))}
    </Styled.List>
  </Styled.Section>
);

export default More;
