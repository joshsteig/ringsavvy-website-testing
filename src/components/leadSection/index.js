import React from 'react';
import { GappedWrapper, Wrapper } from '../wrapper/style';
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
            <h2>{title}</h2>
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
