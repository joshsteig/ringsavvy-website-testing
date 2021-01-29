import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Hero from '../components/hero';
import SecondaryContent from '../components/secondaryContent';
import Testimonials from '../components/testimonials';
import FaqAccordion from '../components/faqAccordion';

export default function PayAsYouGoService({ location }) {
  const heroData = {
    heading: 'Pay As You Go Answering Service',
  };

  const contentData = [
    {
      id: 1,
      heading: 'Getting started with Ring Savvy’s Spanish speaking service',
      content:
        'Getting started is easy! We’ll work with you and your phone provider to set up your service. This typically takes a short period of time, and requires very little effort on your end. Just let our Savvy representative know what you’d like from our service, and our top notch support team will take care of the rest.',
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
          Pay As You Go Answering Service | Ring Savvy | No Contracts, Ever.
        </title>
        <meta
          name='description'
          content='Pay As You Go Answering Service | Ring Savvy | No Contracts, Ever. Only Pay For What You Use | Get Live Answering Services With No Strings. Try For Free:'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <h2>Pay As You Go Answering Service</h2>
        <p>
          “I’m tired of my giant bill with my answering service, and my minutes
          don’t even rollover if I don’t use them! I still have to pay for
          unused minutes at the end of my month!” If this sounds like you, you
          need a pay as you go answering service! With a pay as you go answering
          service, you do not have to worry about using up the minutes you are
          allowed, and you also do not have to worry about going over your
          allotted minutes and being charged at an inflated rate for each
          additional minute!
        </p>
        <h2>What is a Pay As You Go Answering Service?</h2>
        <p>
          A pay as you go answering service is an answering service that allows
          you to use any number of minutes you want, without having to purchase
          a minute package up front. Simply pay at the end of each month for
          exactly what you’ve used, based on how much you’ve used, and never
          receive overage charges or be charged for unused minutes! Even better,
          a pay as you go answering service will not round your minutes up if
          the call is shorter than a minute. This means that you are actually
          being given a fair price for the time you’ve used, and that your bill
          is not inflated!
        </p>
        <h2>Is Ring Savvy a Pay As You Go Answering Service?</h2>
        <p>
          In fact, we are! Ring Savvy is the only true pay as you go answering
          service, because none of our customers are ever put into a minute
          package and either slammed with overages at the end of the month, or
          robbed of unused minutes by the end of the month. All of our customers
          simply pay for what they use, and ONLY what they use.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
