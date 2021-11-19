import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Hero from '../components/hero';
import Benefits from '../components/LandingBody/benefits';
import Peoples from '../components/LandingBody/peoples';
import Banner from '../components/LandingBody/banner';
import Persons from '../components/LandingBody/persons';
import Feedback from '../components/LandingBody/carrousal';

export default function ReceptionistTeam({ location }) {
  const heroData = {
    heading: 'Never Miss The New Customer Again',
    subHeading:
      'Whenever you can’t get to a call, our 24/7 virtual receptionist team will be there to pick up the phone and help secure you new business.',
    primaryCtaText: 'GET A QUOTE',
    primaryCtaLink: '/get-a-quote/',
  };
  return (
    <Layout location={location}>
      <Helmet>
        <title>
          Best Quality 24/7 Live Answering Service and Virtual Receptionists
        </title>
        <meta
          name='description'
          content='Ring Savvy | 24/7 Live Answering Service | Serving All Industries as a Quality Extension of Your Business | Try For Free! Fully Bilingual.'
        />
      </Helmet>
      <Hero
        heading={heroData.heading}
        subHeading={heroData.subHeading}
        primaryCtaText={heroData.primaryCtaText}
        primaryCtaLink={heroData.primaryCtaLink}
      />
      <Benefits />
      <Persons />
      <Banner />
      <Peoples />
      <Feedback />
    </Layout>
  );
}
