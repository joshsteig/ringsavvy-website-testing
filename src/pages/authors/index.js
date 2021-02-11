import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';

export default function Authors({ location }) {
  const heroData = {
    heading: 'Authors',
  };

  return (
    <Layout location={location}>
      <Helmet>
        <title>
          Ring Savvy Authors | Learn More About the Blog Writers Here:
        </title>
        <meta
          name='description'
          content="Ring Savvy Authors | Here Are The People Who Write Our Blog, Informational, and Support Content! Also, here's how to get in contact with them:"
        />
      </Helmet>
      <Hero heading={heroData.heading} />
    </Layout>
  );
}
