import React from 'react';
import { Link } from 'gatsby';
import Content from '../content';
import { Section } from '../section';
import { Wrapper } from '../wrapper';
import { FlexRow } from '../globals';
import Cta from './cta';
import Faq from './faq';
import * as Styled from './style';

const FaqAccordion = ({ contentData, horizontal = false, primary = false }) => {
  const CtaData = {
    heading: 'Try Ring Savvy free for 7 days',
    content: [
      'Experience all our phone answering service has to offer without any risk or financial commitment.',

      'All business owners are given the opportunity to test out our receptionist team for over a week, and see for themselves whether or not Ring Savvy will be beneficial to their business.',
    ],
    ctaText: 'Get started',
    ctaLink: '/sign-up/',
  };

  const faqData = [
    {
      question: 'What happens during my free trial?',
      answer:
        'During your free trial period, you’ll have access to just about all of our features, allowing you to take in the full Ring Savvy experience. The only feature we don’t offer to those in trial is appointment scheduling.',
    },
    {
      question: 'Do I need to put a credit card down?',
      answer:
        'Not until your free trial concludes. We’ll only need your credit card information if you choose to become a Ring Savvy customer.',
    },
    {
      question: 'How long will it take to set up my free trial?',
      answer:
        'Make sure new leads that come in during the overnight and weekends never pass you by.',
    },
    {
      question: 'What happens at the end of my free trial?',
      answer:
        'A member of our team will reach out to you and go over the results of your trial period. If you’d like to continue using our service, we’ll get you started right away as a paying customer. If you decide the service is not for you, you can walk away at no cost.',
    },
  ];

  return (
    <Section>
      <Wrapper>
        <Content
          contentData={contentData}
          horizontal={horizontal}
          primary={primary}
        />
        <FlexRow>
          <Styled.Cta>
            <Cta data={CtaData} />
          </Styled.Cta>
          <Styled.FaqList>
            {faqData.map((faq, index) => (
              <Faq faq={faq} index={index} key={index} />
            ))}
            <Link to='/faq/'>Read more FAQs</Link>
          </Styled.FaqList>
        </FlexRow>
      </Wrapper>
    </Section>
  );
};

export default FaqAccordion;
