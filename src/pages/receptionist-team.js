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
          Live Answering Service | Real Humans, 24 Hours a Day | Ring Savvy
        </title>
        <meta
          name='description'
          content='Live Answering Service | Real Humans, 24 Hours a Day | Ring Savvy | The Largest and Fastest Answering Service Available, Try Us Free For 7 Days!'
        />
      </Helmet>
      <Hero
        heading={heroData.heading}
        subHeading={heroData.subHeading}
        primaryCtaText={heroData.primaryCtaText}
        primaryCtaLink={heroData.primaryCtaLink}
      />
      <ValueIllustration
        valueData={valueData[0]}
        contentData={contentData.find((data) => data.id === 1)}
        illustration={messageIllustration}
      />
      <Testimonials />
      <CardGrid
        cardData={cardData}
        contentData={contentData.find((data) => data.id === 2)}
      />
      {/* TODO: change illustration image */}
      <ValueIllustration
        valueData={valueData[1]}
        contentData={contentData.find((data) => data.id === 1)}
        illustration={messageIllustration}
      />
      <EmailSection />
      <FaqAccordion contentData={contentData.find((data) => data.id === 4)} />
    </Layout>
  );
}
