import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import postscribe from 'postscribe';
import { calendly } from '../utils/embedScripts';
import Layout from '../components/layout';
import { FlexRow, FlexCol } from '../components/globals';
import GreenHalf from '../components/greenHalf';

const Heading = styled.h1`
  font-size: ${({ theme }) => theme.global.fontSizes.xl};
  margin-bottom: 0.5em;
`;

const EmbedContainer = styled.div`
  width: 100%;
`;

export default function BookNow({ location }) {
  useEffect(() => {
    postscribe('#formEmbed', calendly);
  }, []);

  const freeTrial =
    'Ring Savvy’s free trial is 100% free. No credit card required.';

  return (
    <Layout navHidden footerHidden location={location}>
      <Helmet>
        <title>Book an Appointment to Speak With Us Here- Ring Savvy</title>
        <meta
          name='description'
          content='Schedule a Demo, Book a Call to Talk More About Our Service, Or Schedule a Call to Get Started With Us Today! Just Pick a Time and We Will Get In Touch.'
        />
      </Helmet>
      <FlexRow>
        <GreenHalf text={freeTrial} />
        <FlexCol center>
          <Heading>Thank you for choosing us!</Heading>
          <p>
            To finish getting setup, call us at{' '}
            <a href='tel:631-600-1111'>631-600-1111</a> or schedule an
            appointment with us below!
          </p>
          <EmbedContainer id='formEmbed' />
        </FlexCol>
      </FlexRow>
    </Layout>
  );
}
