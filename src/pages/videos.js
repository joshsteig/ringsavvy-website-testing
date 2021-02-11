import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Hero from '../components/hero';

export default function StraightForwardingTMobile({ location }) {
  const heroData = {
    heading: 'Videos',
  };

  return (
    <Layout location={location}>
      <Helmet>
        <title>Videos - RingSavvy, Inc.</title>
        <meta
          name='description'
          content="Check Out All The Ring Savvy Videos Here! We've Got Call Forwarding Tutorials, Answers to Questions About Our Service, and More."
        />
      </Helmet>
      <Hero heading={heroData.heading} />
    </Layout>
  );
}
