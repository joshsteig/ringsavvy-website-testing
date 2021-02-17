import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Hero from '../components/hero';

export default function Error404({ location }) {
  const heroData = {
    heading: 'Page not found',
  };

  return (
    <Layout location={location}>
      <Helmet>
        <title>Page not found - RingSavvy, Inc.</title>
      </Helmet>
      <Hero heading={heroData.heading} />
    </Layout>
  );
}
