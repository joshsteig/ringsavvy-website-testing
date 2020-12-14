import React from 'react';
import { Button } from '../button';
import { Section } from '../section';
import { Wrapper } from '../wrapper';
import {
  BannerOverLay,
  BannerWrapper,
  Content,
  FormWrapper,
  Input,
  LeftWrapper,
  LogoWatermark,
  RightWrapper,
} from './style';

export default () => {
  return (
    <Section>
      <Wrapper>
        <LogoWatermark />
        <Content>
          <h2>A great marketing campaign can only take your business so far</h2>
          <p>
            If you’re unable to capture all the new leads your advertising
            growing your business will be close to impossible. Modern consumers
            are growing increasingly impatient, and simply don’t have a desire
            to deal with voicemail anymore. So in essence, every call you fail
            to provide a live answer for, could be a potential missed new
            customer.
          </p>
          <p>
            You’ll be amazed the impact a live human voice can make on your
            customers. By giving callers a real knowledgeable person to interact
            with on their first call to your business, you’re showing them right
            away that you actually care. You only get to make a first impression
            once, and Ring Savvy will make sure it’s a great one.
          </p>
        </Content>
        <BannerWrapper>
          <BannerOverLay>
            <LeftWrapper>
              <h3>Want to revisit this later?</h3>
              <p>Let us send you our company brochure.</p>
            </LeftWrapper>
            <RightWrapper>
              <FormWrapper>
                <Input
                  className='w-full'
                  type='email'
                  placeholder='Email Address'
                />
                <Button padding='medium' $primary to='/'>
                  Send
                </Button>
              </FormWrapper>
            </RightWrapper>
          </BannerOverLay>
        </BannerWrapper>
      </Wrapper>
    </Section>
  );
};
