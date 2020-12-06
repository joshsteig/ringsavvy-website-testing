import React from 'react';
import Heading from '../heading/style';
import { Button } from '../button/style';
import { Description } from '../leadSection/style';
import { GappedWrapper, Wrapper } from '../wrapper/style';
import {
  BannerOverLay,
  BannerWrapper,
  Content,
  ContentWrapper,
  FormWrapper,
  Input,
  LeftWrapper,
  MarketingWrapper,
  RightWrapper,
} from './style';

const MarketingCompaign = () => {
  return (
    <Wrapper>
      <MarketingWrapper />
      <GappedWrapper>
        <ContentWrapper>
          <Heading level={2}>
            A great marketing campaign can only take your business so far
          </Heading>
          <Content>
            <Description paddingTop={1}>
              If you’re unable to capture all the new leads your advertising
              generates, growing your business will be close to impossible.
              Modern consumers are growing increasingly impatient, and simply
              don’t have a desire to deal with voicemail anymore. So in essence,
              every call you fail to provide a live answer for, could be a
              potential missed new customer.
            </Description>
            <Description paddingTop={1}>
              You’ll be amazed the impact a live human voice can make on your
              customers. By giving callers a real knowledgeable person to
              interact with on their first call to your business, you’re showing
              them right away that you actually care. You only get to make a
              first impression once, and Ring Savvy will make sure it’s a great
              one.
            </Description>
          </Content>
        </ContentWrapper>
        <BannerWrapper>
          <BannerOverLay>
            <LeftWrapper>
              <Heading level={3} color="#ffffff">
                Want to revisit this later?
              </Heading> 
              <Description color='white' margin={0} paddingTop={0.1}>
                Let us send you our company brochure.
              </Description>
            </LeftWrapper>
            <RightWrapper>
              <FormWrapper>
                <Input
                  className='w-full'
                  type='email'
                  placeholder='Email Address'
                />
                <Button padding='large' primary>
                  Send
                </Button>
              </FormWrapper>
            </RightWrapper>
          </BannerOverLay>
        </BannerWrapper>
      </GappedWrapper>
    </Wrapper>
  );
};

export default MarketingCompaign;
