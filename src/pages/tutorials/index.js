import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';

export default function StraightForwardingTMobile({ location }) {
  const heroData = {
    heading: 'Tutorials',
  };

  return (
    <Layout location={location}>
      <Helmet>
        <title>Tutorials - Learn More About How Ring Savvy Works</title>
        <meta
          name='description'
          content='Watch Our Tutorial Videos on How The Service Works, Call Forwarding Instructions, and More! These Resources Should Help Improve Your Business.'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
    </Layout>
  );
}
