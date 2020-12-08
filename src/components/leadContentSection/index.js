import React from 'react';
import { Wrapper } from '../wrapper/style';
import {
  LeftContentWrapper,
  RightContentWrapper,
  ContentWrapper,
  ContentDescription,
  LeadContentSectionWrapper,
} from './style';

const LeadContentSection = ({ leadData, horizontal = false }) => {
  const { title, description } = leadData;
  return (
    <Wrapper>
      <LeadContentSectionWrapper>
        <ContentWrapper>
          <LeftContentWrapper horizontal={horizontal}>
            <h2>{title}</h2>
          </LeftContentWrapper>
          <RightContentWrapper horizontal={horizontal}>
            <ContentDescription>{description}</ContentDescription>
          </RightContentWrapper>
        </ContentWrapper>
      </LeadContentSectionWrapper>
    </Wrapper>
  );
};

export default LeadContentSection;
