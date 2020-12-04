import React from 'react';
import {
  ContentWrapper,
  CtaWrapper,
  Description,
  HeroWrapper,
  Title,
} from './style';
import { Button } from '../button/style';
import { GappedWrapper, Wrapper } from '../wrapper/style';
const Hero = () => {
  return (
    <HeroWrapper>
      <Wrapper>
        <GappedWrapper>
          <ContentWrapper>
            <Title>
              Our Virtual receptionists help optimize the workflow of field
              service businesses
            </Title>
            <Description>
              You’ve got enough on your plate already. Our 24/7 live
              receptionist service is ready to answer any phone calls you don’t
              have time for, take highly detailed customer messages and help
              build a highly organized dispatching system for your company.
            </Description>
            <CtaWrapper>
              <Button primary padding='large'>
                Try free for 7 Days
              </Button>
              <Button transparent padding='large'>
                Get a custom quote
              </Button>
            </CtaWrapper>
          </ContentWrapper>
        </GappedWrapper>
      </Wrapper>
    </HeroWrapper>
  );
};

export default Hero;
