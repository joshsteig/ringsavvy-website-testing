import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';

export default function Coverage({ location }) {
  const heroData = {
    heading: 'Coverage',
  };

  return (
    <Layout location={location}>
      <Helmet>
        <title>
          Long Island Answering Service | Need an Answering Service on LI?
        </title>
        <meta
          name='description'
          content='Long Island Answering Service | Need an Answering Service on LI? Choose Ring Savvy | 24/7 Virtual Receptionists, Customizable Features. Try Free For 7 Days!'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
    </Layout>
  );
}
