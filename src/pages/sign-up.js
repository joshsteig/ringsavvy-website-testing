import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import postscribe from 'postscribe';
import { signUp } from '../utils/embedScripts';
import Layout from '../components/layout';
import { FlexRow, FlexCol } from '../components/globals';
import GreenHalf from '../components/greenHalf';

export default function SignUp({ location }) {
  useEffect(() => {
    postscribe('#formEmbed', signUp);
  }, []);

  const freeTrial =
    'Ring Savvy’s free trial is 100% free. No credit card required.';

  return (
    <Layout navHidden footerHidden location={location}>
      <Helmet>
        <title>Sign Up | Ring Savvy | Get Our 7 Day Free Trial Now!</title>
        <meta
          name='description'
          content='Sign Up | Ring Savvy | Get Our 7 Day Free Trial With Access to Every Feature We Offer. No Credit Card Down to Try, So Sign Up Now!'
        />
      </Helmet>
      <FlexRow wrap>
        <GreenHalf text={freeTrial} />
        <FlexCol center>
          <div id='formEmbed' />
        </FlexCol>
      </FlexRow>
    </Layout>
  );
}
