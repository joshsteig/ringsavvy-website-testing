import React, { useState } from 'react';
import { Section } from '../section';
import { Wrapper } from '../wrapper';
import { FlexRow } from '../globals';
import PricingPlan from '../pricingPlan';
import PricingTable from '../pricingTable';

const Pricing = () => {
  const planDisplay = [
    {
      id: 1,
      name: 'Small',
      minutes: '50',
      price: '$200/month',
      features: [
        '30% overage protection',
        'Every premium feature we offer',
        '24/7 live support',
        '24 hour bilingual receptionist',
      ],
      description:
        'Great for small businesses who want to keep overhead costs low.',
    },
    {
      id: 2,
      name: 'Medium',
      minutes: '100',
      price: '$320/month',
      features: [
        '25% overage protection',
        'Every premium feature we offer',
        '24/7 live support',
        '24 hour bilingual receptionist',
      ],
      description:
        'Great for growing businesses that require a little extra phone support.',
    },
    {
      id: 3,
      name: 'Custom',
      features: [
        'Overage protection according to your minute usage',
        'A minute package specific to your business needs',
        '24/7 live support',
        '24 hour bilingual receptionist',
      ],
      description:
        'Great for businesses that expect to either use a lot of minutes, or need help figuring out how many minutes they’ll need.',
      ctaText: 'Get My Quote',
      ctaLink: '/get-a-quote/',
    },
  ];

  const tableData = [
    {
      id: 1,
      minutes: '200',
      price: '$580/month',
    },
    {
      id: 2,
      minutes: '300',
      price: '$817/month',
    },
    {
      id: 3,
      minutes: '400',
      price: '$922/month',
    },
    {
      id: 4,
      minutes: '500',
      price: '$1,100/month',
    },
    {
      id: 5,
      minutes: '600',
      price: '$1,280/month',
    },
    {
      id: 6,
      minutes: '700',
      price: '$1,470+/month',
    },
  ];

  const small = planDisplay.find((data) => data.id === 1);
  const medium = planDisplay.find((data) => data.id === 2);
  const custom = planDisplay.find((data) => data.id === 3);

  return (
    <Section>
      <Wrapper>
        <FlexRow style={{ marginTop: '-80px' }}>
          <PricingPlan plan={small} position='left' />
          <PricingPlan plan={medium} position='center' />
          <PricingPlan plan={custom} position='right' />
        </FlexRow>
        <PricingTable tableData={tableData} />
      </Wrapper>
    </Section>
  );
};

export default Pricing;
