import React from 'react';
import {
  LeftContentWrapper,
  RightContentWrapper,
  ContentWrapper,
} from './style';

const LeadContentSection = ({ leadData, horizontal = false }) => {
  const { title, description } = leadData;
  return (
    <ContentWrapper horizontal={horizontal}>
      <LeftContentWrapper horizontal={horizontal}>
        <h2>{title}</h2>
      </LeftContentWrapper>
      <RightContentWrapper horizontal={horizontal}>
        <p>{description}</p>
      </RightContentWrapper>
    </ContentWrapper>
  );
};

export default LeadContentSection;
