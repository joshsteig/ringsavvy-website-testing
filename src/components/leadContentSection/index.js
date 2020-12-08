import React from 'react';
import { Wrapper } from '../wrapper/style';
import {
  LeftContentWrapper,
  RightContentWrapper,
  ContentWrapper,
  ContentDescription,
  LeadContentSectionWrapper,
} from './style';

const LeadContentSection = ({ leadData }) => {
  const { title, description } = leadData;
  return (
    <Wrapper>
      <LeadContentSectionWrapper>
        <ContentWrapper>
          <LeftContentWrapper>
            <h2>{title}</h2>
          </LeftContentWrapper>
          <RightContentWrapper>
            <ContentDescription>{description}</ContentDescription>
          </RightContentWrapper>
        </ContentWrapper>
      </LeadContentSectionWrapper>
    </Wrapper>
  );
};

export default LeadContentSection;
