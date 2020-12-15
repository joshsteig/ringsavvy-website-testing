import React, { useState, useEffect } from 'react';
import { client } from '../../utils/contentful';
import { Button } from '../button';
import { Wrapper } from '../wrapper';
import * as Styled from './style';

const Hero = () => {
  //TODO: use StaticQuery to pull data? or just grab from assets/images?
  const [heroBg, setBg] = useState('');
  useEffect(() => {
    client
      .getAsset('4UAfv2hN8DUQFyCinSQIfJ')
      .then((asset) => setBg(asset.fields.file.url))
      // eslint-disable-next-line no-console
      .catch(console.error);
  }, []);

  return (
    <Styled.Hero backgroundImage={heroBg}>
      <Wrapper>
        <Styled.Content>
          <h1>
            Our virtual receptionists help optimize the workflow of field
            service businesses
          </h1>
          <Styled.Description>
            You’ve got enough on your plate already. Our 24/7 live service is
            ready to answer any phone calls you don’t have time for, take highly
            detailed customer messages and help build a highly organized
            dispatching system for your company.
          </Styled.Description>
          <Styled.CtaWrapper>
            <Button $primary padding='large' to='/'>
              Try free for 7 Days
            </Button>
            <Button
              to='/'
              $transparent
              $hoverColor
              padding='large'
              fontSize='1.1rem'
            >
              Get a custom quote
            </Button>
          </Styled.CtaWrapper>
        </Styled.Content>
      </Wrapper>
    </Styled.Hero>
  );
};

export default Hero;
