import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Hero from '../components/hero';
import Testimonials from '../components/testimonials';
import FaqAccordion from '../components/faqAccordion';
import EmailSection from '../components/emailSection';
import CardGrid from '../components/cardGrid';
import ValueIllustration from '../components/valueIllustration';
import messageIllustration from '../assets/images/new-message-illustration.svg';

export default function LiveAnsweringService({ location }) {
  const contentData = [
    {
      id: 1,
      heading: 'Never miss another business opportunity to voicemail',
      content:
        'Providing a live and knowledgeable representative of your business for customers to engage with, will ensure that new prospects always feel cared and attended to. Even if a potential customer is unable to speak with you on the phone right away, they will walk away from their call feeling confident in your company’s ability to solve their problems.',
    },
    {
      id: 2,
      heading: 'Provide a live answer, every time',
      content:
        'Our team of receptionists will ensure that all of your callers get to speak with a live person who will greet them, accurately record any messages they might have, and provide them with a timeline for when they will be hearing back from you.',
    },
    {
      id: 3,
      heading: 'Integrate with your business using our customizable features',
      content:
        'Business owners will get the chance to personalize just about every aspect of their Ring Savvy services, from the way we interact with their callers to the methods we use for handling their calls.',
    },
    {
      id: 4,
      heading: 'Why Ring Savvy is the best live answering service for you',
      content:
        'Our 24/7 virtual receptionist team is committed to not just answering your business’ phones, but helping your company convert its new leads into paying customers. Providing a live answer to customers during their time of need means everything these days, and utilizing Ring Savvy will guarantee you’re always able to offer a high quality customer service experience to new prospects.',
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
      heading: 'State of the art call forwarding',
      content:
        'Choose when you’d like to answer calls for your business, and when you’d like calls to be automatically forwarded to our team.',
      linkUrl: '/services/overflow-call-handling',
    },
  ];

  // TODO: Need content for 2nd set of values
  const valueData = [
    [
      {
        heading: 'Detailed message taking',
        content:
          'You’ll have the opportunity to review messages from sales calls at your own pace, as we’ll send those messages to you via text and/or email message',
      },
      {
        heading: 'Superior call transferring',
        content:
          'No need to sweat missing a call. Our receptionists can reach out to a designated line of your choosing, and give you the opportunity to engage with callers in real time.',
      },
    ],
    [
      {
        heading: 'Custom call greetings',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      {
        heading: 'Customizable customer intakes',
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    ],
  ];

  return (
    <Layout location={location}>
      <Helmet>
        <title>
          Live Answering Service | Real Humans, 24 Hours a Day | Ring Savvy
        </title>
        <meta
          name='description'
          content='Live Answering Service | Real Humans, 24 Hours a Day | Ring Savvy | The Largest and Fastest Answering Service Available, Try Us Free For 7 Days!'
        />
      </Helmet>
      <Hero />
      <ValueIllustration
        valueData={valueData[0]}
        contentData={contentData.find((data) => data.id === 1)}
        illustration={messageIllustration}
      />
      <Testimonials />
      <CardGrid
        cardData={cardData}
        contentData={contentData.find((data) => data.id === 2)}
      />
      {/* TODO: change illustration image */}
      <ValueIllustration
        valueData={valueData[1]}
        contentData={contentData.find((data) => data.id === 1)}
        illustration={messageIllustration}
      />
      <EmailSection />
      <FaqAccordion contentData={contentData.find((data) => data.id === 4)} />
    </Layout>
  );
}
