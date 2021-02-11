import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Hero from '../components/hero';

export default function StraightForwardingTMobile({ location }) {
  const heroData = {
    heading: 'Our Reviews',
  };

  return (
    <Layout location={location}>
      <Helmet>
        <title>Our Reviews - RingSavvy, Inc.</title>
        <meta name='description' content='Ring Savvy Reviews' />
      </Helmet>
      <Hero heading={heroData.heading} />
    </Layout>
  );
}
