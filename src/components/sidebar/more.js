import React from 'react';
import * as Styled from './style';

const More = ({ learnMoreData }) => {
  const { heading, content, ctaLink } = learnMoreData;
  return (
    <Styled.Section hasShadow>
      <Styled.Title>Try Ring Savvy for free</Styled.Title>
      <Styled.MoreList>
        {learnMoreData.map((data, index) => (
          <Styled.ListItem key={index}>
            <a href={data.ctaLink}>{data.heading}</a>
            <Styled.P>{data.content}</Styled.P>
          </Styled.ListItem>
        ))}
      </Styled.MoreList>
    </Styled.Section>
  );
};

export default More;
