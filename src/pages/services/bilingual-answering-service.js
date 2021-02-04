import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function BilingualAnsweringService({ location }) {
  const heroData = {
    heading: 'Bilingual Answering Service',
  };

  const contentData = [
    {
      id: 1,
      heading: 'Getting started with Ring Savvy’s bilingual answering service',
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
          Bilingual Answering Service | 24/7 English and Spanish Speaking
        </title>
        <meta
          name='description'
          content='Bilingual Answering Service | Ring Savvy | Fully Bilingual 24/7 Ensuring You Capture Even More New Business - Read About Our Bilingual Services Here.'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <h2>
          Ring Savvy helps businesses engage with both English and Spanish
          speaking customers over the phone.
        </h2>
        <p>
          Our virtual receptionist team, which remains active in answering phone
          calls 24/7/365, always has Spanish speaking staff ready to answer your
          company’s calls. Many of these receptionists speak Spanish as a first
          language, making them an invaluable resource for companies trying to
          tap into new Spanish speaking markets in their area.
        </p>
        <p>
          While Ring Savvy is not the only company that offers Spanish speaking
          virtual receptionists, we truly believe that we provide the best
          quality bilingual receptionist service.
        </p>
        <h4>Here’s why:</h4>
        <ul>
          <li>
            All Ring Savvy receptionist hires live local to our one and only
            call center in Long Island, New York. We never outsource calls to
            outside locations, and are able to carefully monitor the performance
            of our virtual receptionist team members on the phone. Having one
            call center and all of our phone answering staff nearby, allows us
            to guarantee that we always have English and Spanish speaking staff
            on the clock and ready to field calls.
          </li>
          <li>
            Before beginning their work as an official Ring Savvy team member,
            all of our receptionists are put through months of phone training.
            During this time period, they are carefully schooled on proper phone
            etiquette, message taking, live call transferring, lead capturing,
            and much more! We work hard to ensure that your Spanish speaking
            customers only interact with the very best Spanish speaking
            receptionists.
          </li>
          <li>
            As we alluded to above, Ring Savvy is not just a phone answering
            service, but a lead capturing service. Our virtual receptionists get
            trained to perform new customer intakes on all first-time callers to
            your business. Through the new customer intake process, our
            receptionists will gather your caller’s personal information, as
            well as info on why they are reaching out to your company. This
            process not only make callers feel like their needs are being
            attended to, but gives business owners the information they need to
            properly evaluate and move forward with a new potential customer.
            When a Spanish speaker calls into your business, Ring Savvy will
            always have a Spanish speaking receptionist ready to perform a new
            customer intake on them.
          </li>
        </ul>
        <h2>How does using a bilingual answering service work?</h2>
        <p>
          As a Ring Savvy customer, your calls from Spanish speakers will be
          addressed in one of two ways.
        </p>
        <ul>
          <li>
            When one of our receptionist team members answers a phone call from
            a Spanish speaking individual on behalf of your business, you don’t
            have to do a thing! We’ll make sure that the caller gets to speak
            with one of our trained bilingual receptionists, and is taken
            through the new client intake process. At the end of the call, we’ll
            send you a message in your preferred language with all the details
            from their call.
          </li>
          <li>
            When your or one of your staff members answers a call from a Spanish
            speaking individual, you can simply ask the customer to hold for
            just a moment, and transfer the call to our virtual receptionist
            team. We’ll take care of their new customer intake for you, and get
            back to you with a message shortly.
          </li>
        </ul>
        <p>
          Invest in a Bilingual Answering Service today, and allow your business
          to reach its full potential. Get started with a free 10-day trial of
          Ring Savvy now by filling out this sign-up form or calling
          631-600-1111.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
