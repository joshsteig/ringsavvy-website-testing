import React from 'react';
import { Wrapper } from '../wrapper';
import EmailForm from '../emailForm';
import * as Styled from './style';

const MarketingCampaign = () => {
  return (
    <Styled.WatermarkSection>
      <Wrapper>
        <Styled.Content>
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
        </Styled.Content>

        <EmailForm />
      </Wrapper>
    </Styled.WatermarkSection>
  );
};

export default MarketingCampaign;
