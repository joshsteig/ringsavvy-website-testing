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
    <>
      <Helmet>
        <title>
          Best Quality 24/7 Live Answering Service and Virtual Receptionists
        </title>
        <meta
          name='description'
          content='Ring Savvy | 24/7 Live Answering Service | Serving All Industries as a Quality Extension of Your Business | Try For Free! Fully Bilingual.'
        />
      </Helmet>
      <Navbar />
      <Benefits />
      <Persons />
      <Banner />
      <Peoples />
      <Feedback/>
      <Footer/>
    </>
  );
}

export const pageQuery = graphql`
  }
`;
