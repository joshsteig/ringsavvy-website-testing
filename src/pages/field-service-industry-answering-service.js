import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Hero from '../components/hero';
import Testimonials from '../components/testimonials';
import FaqAccordion from '../components/faqAccordion';

export default function OurStoryIndex({ location }) {
  const contentData = [
    {
      id: 1,
      heading: 'Why Ring Savvy is the best live answering service for you',
      content:
        'Our 24/7 virtual receptionist team is committed to not just answering your business’ phones, but helping your company convert its new leads into paying customers. Providing a live answer to customers during their time of need means everything these days, and utilizing Ring Savvy will guarantee you’re always able to offer a high quality customer service experience to new prospects.',
    },
  ];

  return (
    <Layout location={location}>
      <Helmet>
        <title>
          Answering Service for the Field Service Industry - RingSavvy, Inc.
        </title>
      </Helmet>
      <Hero />
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
