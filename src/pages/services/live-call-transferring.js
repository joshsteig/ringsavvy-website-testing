import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function LiveCallTransferring({ location }) {
  const contentData = [
    {
      id: 1,
      heading: 'Why Ring Savvy is the best live answering service for you',
      content:
        'Our 24/7 virtual receptionist team is committed to not just answering your business’ phones, but helping your company convert its new leads into paying customers. Providing a live answer to customers during their time of need means everything these days, and utilizing Ring Savvy will guarantee you’re always able to offer a high quality customer service experience to new prospects.',
    },
  ];

  const learnMoreData = [
    {
      heading: 'See how our service works',
      content:
        'You’ll have full control of how our receptionist team manages your phone lines and engages with your callers.',
      ctaLink: '/how-it-works/',
    },
    {
      heading: 'See our pricing structure',
      content:
        'Use our price estimator tool to find out how much you’ll be spending on our service each month.',
      ctaLink: '/pricing/',
    },
    {
      heading: 'Try free for 7 days',
      content:
        'Experience all Ring Savvy has to offer, without paying a cent. All business owners are encouraged to sign up for a free trial with our company.',
      ctaLink: '/sign-up/',
    },
  ];

  return (
    <Layout location={location}>
      <Helmet>
        <title>
          Live Call Transferring | You Tell Us Which Calls You Want to Take
        </title>
        <meta
          name='description'
          content="Live Call Transferring | You Tell Us Which Calls You Want to Take, We'll Announce the Calls to You. Ring Savvy | Try Us Free For 7 Days!"
        />
      </Helmet>
      <Hero />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <p>
          If you want to stop wasting valuable time during your work days
          screening calls, and only engage with high priority callers in real
          time, using live call transferring from Ring Savvy is a must.
        </p>
        <p>
          Our team of virtual receptionists works around the clock, and will not
          only ensure that all your business’ incoming calls are answered, but
          will always give you the opportunity to have important calls
          transferred to you. What qualifies as an important call? That’s for
          you to determine. At the beginning of your relationship with Ring
          Savvy, you’ll let us know which types of calls you’d like to have
          transferred to you. For example, many of our customers will only want
          to be contacted when a person calls into their business for the first
          time.
        </p>
        <p>
          At the start of every call our receptionists handle, they will ask
          your caller for their name and reason for calling. If they identify
          the caller as someone you have asked to immediately speak with, they
          will ask the caller to briefly hold while they attempt to get you on
          the phone.
        </p>
        <h2>What options do you have with live call transferring?</h2>
        <p>
          Once a Ring Savvy virtual receptionist makes contact with you, and
          briefs you on the person calling, you’ll have two options.
        </p>
        <ol>
          <li>
            Our virtual receptionist can transfer you the call, allowing you to
            speak with the caller right away.
          </li>
          <li>
            You can decline to take the call. Our virtual receptionist will then
            inform the caller that you are currently unavailable, and take a
            message. If the caller is a potential new customer, our receptionist
            will be able to gather all of their essential information through
            our new customer intake process.
          </li>
        </ol>
        <p>
          There will of course be times where one of our virtual receptionists
          tries to reach you and you still can’t get to the phone. In those
          cases, our receptionist will follow the protocol laid out in the
          second option listed above.
        </p>
        <h2>Let Ring Savvy simplify your call handling process</h2>
        <p>
          Today, consumers are severely lacking in patience, and we know that
          there’s a lot of pressure for businesses to talk with potential new
          customers in real time. But, when using Ring Savvy, you don’t have to
          be glued to your office phone all day. You can work on the go
          comfortably, and whenever an important call does come into your
          business, our virtual receptionist team will be their to pick it up
          and transfer the call to your mobile device. Live Call Transferring
          from RIng Savvy truly does give you the best of both worlds. Your high
          priority callers will always receive the immediate attention they
          desire and you won’t have to stress about missing the new customer
          ever again!
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
