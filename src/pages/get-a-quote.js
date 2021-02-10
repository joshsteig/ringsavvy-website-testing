import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { getQuote } from '../utils/embedScripts';
import postscribe from 'postscribe';
import Layout from '../components/layout';
import { FlexRow, FlexCol } from '../components/globals';
import GreenHalf from '../components/greenHalf';

export default class GetAQuote extends Component {
  componentDidMount() {
    postscribe('#formEmbed', getQuote);
  }

  render() {
    const freeTrial =
      'Ring Savvy’s free trial is 100% free. No credit card required.';

    return (
      <Layout navHidden footerHidden location={this.location}>
        <Helmet>
          <title>Get a Quote - Ring Savvy - Try Us For 7 Days Free</title>
          <meta
            name='description'
            content="Get a Quote - Ring Savvy - We'll Provide an Estimate of How Many Minutes You'll Need Each Month - We Offer a 7 Day Risk Free Trial - Get Started Here!"
          />
        </Helmet>
        <FlexRow>
          <GreenHalf text={freeTrial} />
          <FlexCol center>
            <div id='formEmbed' />
          </FlexCol>
        </FlexRow>
      </Layout>
    );
  }
}
