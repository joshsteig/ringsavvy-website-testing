import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Hero from '../components/hero';
import SecondaryContent from '../components/secondaryContent';
import Testimonials from '../components/testimonials';
import FaqAccordion from '../components/faqAccordion';

export default function TwentyFourSevenService({ location }) {
  const heroData = {
    heading: 'Spanish Answering Service',
  };

  const contentData = [
    {
      id: 1,
      heading: 'Getting started with Ring Savvy’s Spanish speaking service',
      content:
        'Getting started is easy! We’ll work with you and your phone provider to set up your service. This typically takes a short period of time, and requires very little effort on your end. Just let our Savvy representative know what you’d like from our service, and our top notch support team will take care of the rest.',
    },
  ];

  const learnMoreData = [
    {
      heading: 'How our service works',
      content:
        'You’ll have full control of how our receptionist team manages your phone lines and engages with your callers.',
      ctaText: 'Learn how our service works',
      ctaLink: '/how-it-works/',
    },
    {
      heading: 'Competitive Pricing',
      content:
        'Use our price estimator tool to find out how much you’ll be spending on our service each month.',
      ctaText: 'View our pricing structure',
      ctaLink: '/pricing/',
    },
    {
      heading: 'Try the service free for 7 days',
      content:
        'Experience all Ring Savvy has to offer, without paying a cent. All business owners are encouraged to sign up for a free trial with our company.',
      ctaText: 'Start your free trial',
      ctaLink: '/sign-up/',
    },
  ];

  return (
    <Layout location={location}>
      <Helmet>
        <title>
          Spanish Answering Service | We Answer 24/7 in English and Spanish
        </title>
        <meta
          name='description'
          content='Spanish Answering Service | Our Answering Service is Fully Bilingual in English and Spanish | Give Ring Savvy a Try With Our 7 Day Free Trial.'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <h2>
          There is no better Spanish answering service to use than Ring Savvy
        </h2>
        <p>
          In addition to providing 24/7 phone answering and advanced call
          handling and lead capturing services, Ring Savvy is proud to be a
          Spanish Answering Service. What this means is that our call center is
          always fully staffed with a separate call pool of Spanish speaking
          virtual receptionists — many of whom speak Spanish as their first
          language — and will always be prepared to help your business engage
          with Spanish speaking customers.
        </p>
        <p>
          By having a separate pool of bilingual receptionists, we are able to
          ensure that Spanish speaking callers will likely speak to someone who
          speaks Spanish, without us having to internally transfer the call to
          someone else who can.
        </p>
        <h2>How can a Spanish answering service help you win new customers?</h2>
        <p>
          Imagine a Spanish speaking individual is looking to hire a plumber.
          They call up two businesses, one that only provides English speaking
          representatives and another that offers both English and Spanish
          speaking virtual receptionists. Which business do you think they’ll be
          more likely to give a chance? The business that forces them to talk in
          a language they may not be fully comfortable speaking in, or the
          business that immediately presents them with options and is ready to
          accommodate their specific communication needs.
        </p>
        <p>
          In more cases than not, the Spanish speaking customers you’re trying
          to reach will choose the latter option. Making your new prospects feel
          at their most comfortable on the phone is essential to winning new
          business in today’s consumer world. So if you’re business doesn’t
          already have Spanish speaking receptionist staff available, you need
          to invest in bilingual receptionist support right away.
        </p>
        <h2>What makes Ring Savvy the best spanish answering service?</h2>
        <p>
          When using Ring Savvy, you don’t just get access to receptionists that
          speak Spanish, but highly trained Spanish speaking receptionists. We
          carefully select and train Spanish speaking employees for our virtual
          receptionist team, and only allow them to start answering calls on
          behalf of businesses like yours when we feel they are truly ready and
          on the top of their game.
        </p>
        <h4>
          Our Spanish speaking receptionists receive extensive training on:
        </h4>
        <ul>
          <li>Being polite and professional on the phone</li>
          <li>Performing new customer intakes</li>
          <li>Empathy for high-distress calls</li>
          <li>Message taking with a high degree of accuracy</li>
          <li>
            Following specific live call transferring and call forwarding
            protocols
          </li>
        </ul>
        <p>
          This level of training along with the 24/7 nature of our service, will
          ensure that a top notch Spanish speaking receptionist is always ready
          to greet the Spanish speakers calling into your business. We literally
          have Spanish speaking receptionists ready to field calls at all hours
          of the day and night, weekends and holidays included.
        </p>
        <h2>Why is this a smart investment for your business?</h2>
        <p>
          Just imagine how many more customers your business will be able to
          attract if you’re able to advertise to all of the Spanish speakers in
          your area. The end results could be a significant boost in revenue for
          your company. Not to mention, using Ring Savvy’s virtual receptionist
          team could end up giving your business an incredible edge over
          competitors that are currently failing to provide Spanish speaking
          receptionists.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
