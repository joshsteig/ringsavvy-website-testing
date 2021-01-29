import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Hero from '../components/hero';
import BulletSection from '../components/bulletSection';
import Testimonials from '../components/testimonials';
import FaqAccordion from '../components/faqAccordion';
import { Card } from '../components/card/style';
import CardGrid from '../components/cardGrid';

export default function FieldServiceIndustry({ location }) {
  // TODO: StaticQuery img assets for bullet section
  const heroData = {
    heading: 'Answering Service for the Field Service Industry',
  };

  const contentData = [
    {
      id: 1,
      heading: 'Why Ring Savvy is the best live answering service for you',
      content:
        'Our 24/7 virtual receptionist team is committed to not just answering your business’ phones, but helping your company convert its new leads into paying customers. Providing a live answer to customers during their time of need means everything these days, and utilizing Ring Savvy will guarantee you’re always able to offer a high quality customer service experience to new prospects.',
    },
    {
      id: 2,
      heading: 'Why do field services trust Ring Savvy?',
    },
  ];

  const bulletData = [
    {
      heading: '24/7 live receptionists, all in the U.S.',
      bullets: [
        'Your customers are calling to speak with a representative of your business, not an auto-attendant or voicemail. We answer your calls with a real human being, 24/7.',
        'Potential new clients hang up on voicemail and call your competitors when they don’t speak to someone immediately. Ring Savvy helps you capitalize on every call.',
        'Your business hours just went from 9-5, to 24 hours a day, 7 days a week, 365 days a year. That’s right, we’ll answer your calls on Christmas morning.',
      ],
    },
    {
      heading: 'Industry leading new customer intake',
      bullets: [
        'When a potential new customer is calling, it’s important to perform a new customer intake to ensure that you have the best chance at converting that caller into a paying customer.',
        'We’ll ask your specific questions that will help you get the best understanding of the problem the customer needs help with, and send you all of the pertinent information in real time.',
        'We can have different intakes for different types of industries you handle. If you handle plumbing and HVAC, you’ll need two different scripts. Customize your script for each industry you handle.',
      ],
    },
    {
      heading: 'Intelligent field service dispatching',
      bullets: [
        'You keep complete control over the leads that come into your business – we’ll contact you every time a new lead comes in, and you can decide what to do with the information.',
        'Want us to patch your technicians into the call and send them to the site? We’ll create a customized schedule of on call technicians and contact the on-call tech when they’re needed.',
        'Depending on the type of call that comes in, we can follow your protocol to make sure we contact the person in charge of that matter. Just let us know who to contact.',
      ],
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
        <title>
          Answering Service for the Field Service Industry - RingSavvy, Inc.
        </title>
      </Helmet>
      <Hero heading={heroData.heading} />
      <BulletSection bulletData={bulletData[0]} />
      <BulletSection isFlipped bulletData={bulletData[1]} />
      <BulletSection bulletData={bulletData[2]} />
      <CardGrid
        contentData={contentData.find((data) => data.id === 2)}
        cardData={cardData}
      />
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
