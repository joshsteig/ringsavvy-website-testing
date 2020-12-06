import React from 'react';
import Heading from '../heading/style';
import {
  GappedWrapper,
  Wrapper
} from '../wrapper/style';
import {
  ContentWrapper,
  Description,
  LeftWrapper,
  RightWrapper,
} from './style';

const LeadSection = ({ LeadData, horizontal = false }) => {
  const { title, description } = LeadData;
  return (
    <Wrapper>
      <GappedWrapper padding='large'>
        <ContentWrapper horizontal={horizontal}>
          <LeftWrapper>
            <Heading level={2}>{title}</Heading>
          </LeftWrapper>
          <RightWrapper>
            <Description>{description}</Description>
          </RightWrapper>
        </ContentWrapper>
      </GappedWrapper>
    </Wrapper>
  );
};

export default LeadSection;
