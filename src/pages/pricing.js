import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Hero from '../components/hero';
import { Wrapper } from '../components/wrapper';
import { Section } from '../components/section';
import { getPricing } from '../utils/forms';
import useScript from '../utils/useScript';

export default function Pricing({ location }) {
  const heroData = {
    heading: 'See Ring Savvy Plans & Pricing',
  };

  useScript(getPricing);

  return (
    <Layout location={location}>
      <Helmet>
        <title>
          Live Answering Service Pricing | Ring Savvy Pricing Structure
        </title>
        <meta
          name='description'
          content='Live Answering Service Pricing | Ring Savvy Pricing Structure | No Overages, No Minute Packages, The Minutes Get Cheaper the More You Use. Learn More Here'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <Section>
        <Wrapper>
          <div id='script'></div>
        </Wrapper>
      </Section>
    </Layout>
  );
}
