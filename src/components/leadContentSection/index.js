import React from 'react';
import {
  LeftContentWrapper,
  RightContentWrapper,
  LeadContentSection,
} from './style';

export default ({ leadData, horizontal = false }) => {
  const { title, description } = leadData;
  return (
    <LeadContentSection horizontal={horizontal}>
      <LeftContentWrapper horizontal={horizontal}>
        <h2>{title}</h2>
      </LeftContentWrapper>
      <RightContentWrapper horizontal={horizontal}>
        <p>{description}</p>
      </RightContentWrapper>
    </LeadContentSection>
  );
};
