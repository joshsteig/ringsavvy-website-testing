import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Navbar from '../components/landingHeader';
import { Button } from 'react-bootstrap';
import Benefits from '../components/LandingBody/benefits';
import Peoples from '../components/LandingBody/peoples';
import Banner from '../components/LandingBody/banner';
import Persons from '../components/LandingBody/persons';
import Feedback from '../components/LandingBody/carrousal';
import Footer from '../components/LandingBody/footer';

export default function RootIndex(props) {
  const { location, data } = props;

   return (
    <Layout location={location}>
      <Helmet>
        <title>
          Answering Service for the Field Service Industry - RingSavvy, Inc.
        </title>
      </Helmet>
      <Hero heading={heroData.heading} />
      <BulletSection bulletData={bulletData[0]} />
      <BulletSection isFlipped bulletData={bulletData[1]} />
      <BulletSection bulletData={bulletData[2]} />
      <CardGrid
        contentData={contentData.find((data) => data.id === 2)}
        cardData={cardData}
      />
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
