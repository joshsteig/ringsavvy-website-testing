import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Pricing from '../components/pricing';
import Testimonials from '../components/testimonials';
import FaqAccordion from '../components/faqAccordion';
import CardGrid from '../components/cardGrid';

export default function PricingPlans({ location }) {
  const contentData = [
    {
      id: 1,
      heading: 'Wondering which pricing plan you fit into?',
      content: [
        'The truth is, we’re not sure yet. We won’t be able to provide you with an actual quote until we learn more about your business and your phone answering needs. After all, we aren’t designing a pricing plan for just any small or large business. we’re designing an ideal pricing plan for your business. One thing we can say with certainty is that our payment plans are designed to be highly flexible, and our service can always be altered to accommodate your business’ month-to-month phone answering needs.',

        'The next step in our sign-up process involves you getting on the phone with one of our account executives. The executive you speak with will answer any questions you have about using our service, and help you get set up with a 7-day free trial.',
      ],
    },
    {
      id: 2,
      heading: 'Helping you do more with your business',
      content:
        'Your business is unique and so are your phone answering needs. That’s why at Ring Savvy, we train our virtual receptionists to do so much more than just answer your phones.',
    },
  ];

  const cardData = [
    {
      heading: 'Always live, 24/7/365',
      content:
        'Our call center is always up and running, and fully staffed with both English and Spanish speaking receptionists. We don’t even take holidays off.',
      linkUrl: '/services/24-7-live-answering-service',
    },
    {
      heading: 'Industry leading message taking',
      content:
        'Get the most accurate and organized messages from our receptionists sent directly to your mobile device via text and/or email.',
      linkUrl: '/services/message-taking',
    },
    {
      heading: 'Customizable to fit your business',
      content:
        'Personalize everything from the questions we ask first-time callers to your company, to the way we go about transferring your calls.',
      linkUrl: '/services/customizable',
    },
    {
      heading: 'State of the art call forwarding',
      content:
        'Choose when you’d like to answer calls for your business, and when you’d like calls to be automatically forwarded to our team.',
      linkUrl: '/services/overflow-call-handling',
    },
  ];

  return (
    <Layout location={location}>
      <Helmet>
        <title>Ring Savvy's Monthly Plans & Pricing</title>
        <meta
          name='description'
          content="Ring Savvy's Monthly Plans & Pricing - View Our Pricing Packages and Learn More About How Paying With Ring Savvy Works. Get a Free Trial Today!"
        />
      </Helmet>
      <Hero />
      <Pricing />
      <FaqAccordion
        horizontal
        contentData={contentData.find((data) => data.id === 1)}
      />
      <Testimonials />
      <CardGrid
        contentData={contentData.find((data) => data.id === 2)}
        cardData={cardData}
      />
    </Layout>
  );
}
