import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';

export default function Authors({ location }) {
  const heroData = {
    heading: 'About Joe Galotti',
  };

  return (
    <Layout location={location}>
      <Helmet>
        <title>About Joe Galotti - RingSavvy, Inc.</title>
        <meta
          name='description'
          content='About Joe Galotti - Ring Savvy - Joe Is a Leading Blog Contributor and Marketing Expert Here at Ring Savvy. Visit This Page To Learn More About Joe!'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
    </Layout>
  );
}
