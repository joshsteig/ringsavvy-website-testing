import React from 'react';
import {
  LeftContentWrapper,
  RightContentWrapper,
  ContentWrapper,
  ContentDescription,
} from './style';

const Content = ({ leadData }) => {
  const { title, description } = leadData;
  return (
    <ContentWrapper>
      <LeftContentWrapper>
        <h2>{title}</h2>
      </LeftContentWrapper>
      <RightContentWrapper>
        <ContentDescription>{description}</ContentDescription>
      </RightContentWrapper>
    </ContentWrapper>
  );
};

export default Content;
