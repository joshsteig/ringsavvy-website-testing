import React, { useState, useEffect } from 'react';
import { client } from '../../utils/contentful';
import { Button } from '../button/style';
import { GappedWrapper, Wrapper } from '../wrapper/style';
import Heading from '../heading/style';
import {
  ContentWrapper,
  CtaWrapper,
  Description,
  HeroWrapper,
} from './style';

const Hero = () => {
  const [heroBg, setBg] = useState('');
  useEffect(() => {
    client
      .getAsset('4UAfv2hN8DUQFyCinSQIfJ')
      .then((asset) => setBg(asset.fields.file.url))
      .catch(console.error);
  }, []);

  return (
    <HeroWrapper backgroundImage={heroBg}>
      <Wrapper>
        <GappedWrapper>
          <ContentWrapper>
            <Heading level={1} color="#ffffff">
              Our Virtual receptionists help optimize the workflow of field
              service businesses
            </Heading>
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
              <Button transparent hoverColor padding='large'>
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
