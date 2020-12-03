import React from 'react';
import { GappedWrapper, Wrapper } from '../wrapper/style';
import {
  ContentWrapper,
  Description,
  LeftWrapper,
  RightWrapper,
  Title,
} from './style';

const LeadSection = ({ LeadData, horizontal = false }) => {
  const { title, description } = LeadData;
  return (
    <Wrapper>
      <GappedWrapper padding='large'>
        <ContentWrapper horizontal={horizontal}>
          <LeftWrapper>
            <Title>{title}</Title>
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
