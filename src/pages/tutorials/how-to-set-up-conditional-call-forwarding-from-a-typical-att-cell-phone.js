import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';

export default function ConditionalForwardingATT({ location }) {
  const heroData = {
    heading:
      'How To Set Up Conditional Call Forwarding From a Typical AT&T Cell Phone',
  };

  const learnMoreData = [
    {
      heading: 'See how our service works',
      content:
        'You’ll have full control of how our receptionist team manages your phone lines and engages with your callers.',
      ctaLink: '/how-it-works/',
    },
    {
      heading: 'See our pricing structure',
      content:
        'Use our price estimator tool to find out how much you’ll be spending on our service each month.',
      ctaLink: '/pricing/',
    },
    {
      heading: 'Try free for 7 days',
      content:
        'Experience all Ring Savvy has to offer, without paying a cent. All business owners are encouraged to sign up for a free trial with our company.',
      ctaLink: '/sign-up/',
    },
  ];

  return (
    <Layout location={location}>
      <Helmet>
        <title>
          How To Set Up Conditional Call Forwarding From a Typical AT&T Cell
          Phone - RingSavvy, Inc.
        </title>
        <meta
          name='description'
          content='Steps to set up conditional call forwarding on a typical AT&T cell phone.'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <figure>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/6o043LS3Ggk'
            frameborder='0'
            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen=''
          ></iframe>
        </figure>
        <h2>
          How to set up Conditional Call Forwarding on your ATT cell phone:
          Follow these simple steps!
        </h2>
        <p>
          Step 1: Open the dialer on your mobile phone and dial *004* (do not
          press call yet.)
        </p>
        <p>
          Step 2: Following the *004*, dial the 10 digit telephone number you
          would like to forward your calls to.
        </p>
        <p>Step 3: Then press *11#.</p>
        <p>
          Step 4: Press call and look for a successful response from the auto
          attendant.
        </p>
        <p>
          Even if you have received a message that the call forwarding has been
          successfully activated, make sure that the conditional call forwarding
          is working properly by calling your ATT mobile phone from another
          telephone. If it is not working properly, you may have to turn off the
          call forwarding and try again.
        </p>
        <h2>How To Turn Off Conditional Call Forwarding</h2>
        <p>
          To turn off conditional call forwarding from your ATT cell phone,
          simply punch in #004# and press call. Listen for a successful message
          stating call forwarding has been deactivated.
        </p>
        <p>
          Even if you have received a message that the call forwarding has been
          successfully activated, make sure that your ATT cell phone now rings
          when a call is coming in by testing it with another phone. Please
          comment or send us a message if you experience any difficulty turning
          on or turning off call forwarding!
        </p>
      </SecondaryContent>
    </Layout>
  );
}
