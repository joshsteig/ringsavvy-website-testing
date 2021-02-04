import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function PlumbingService({ location }) {
  const heroData = {
    heading: 'Plumbing Answering Service',
  };

  const contentData = [
    {
      id: 1,
      heading: 'Why Ring Savvy is the best live answering service for you',
      content:
        'Our 24/7 virtual receptionist team is committed to not just answering your business’ phones, but helping your company convert its new leads into paying customers. Providing a live answer to customers during their time of need means everything these days, and utilizing Ring Savvy will guarantee you’re always able to offer a high quality customer service experience to new prospects.',
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
          Plumbing Answering Service | Live Answering Service for Plumbers
        </title>
        <meta
          name='description'
          content='Plumbing Answering Service | Live Answering Service for Plumbers | Ring Savvy | We Provide Intelligent Dispatching, Live Call Transferring, and More!'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <p>
          While plumbers aren’t typically thought of as emergency workers, they
          often need to have an emergency mentality when dealing with customer
          issues. Problems with toilets, sinks and showers are just not
          something people can wait on, and because of this, calls for plumbing
          assistance can literally come at anytime. If a customer reaches out to
          your company’s phone lines, and you fail to provide a live answer,
          your chances of getting that person’s business will go right down the
          drain.
        </p>
        <p>
          Make sure your plumbing business is always ready to help customers in
          need, by utilizing Ring Savvy’s 24/7 phone answering service. We’ll
          give you the greatest possible chance to capture new leads.
        </p>
        <h2>Give customers in crisis immediate assistance</h2>
        <p>
          When signing up with Ring Savvy, you’re guaranteeing that all of your
          business’ incoming calls will be answered by a live person. Our call
          center remains active and fully staffed at all times, and does not
          miss a single incoming call from any of the companies we serve. Our
          plumber’s answering service will prove to be extremely valuable to
          your business, as providing a live answer on that first phone call
          means everything to your customers.
        </p>
        <p>
          Sending new callers to your voicemail will signal to them that your
          company doesn’t care about their needs or simply doesn’t have time to
          help, and will usually result in potential customers turning to your
          competitors for more immediate assistance. Getting to speak with one
          of our highly trained virtual receptionists will make a much better
          impression on prospective customers, as they will be able to answer
          any FAQs the customer might have, and let them know that help is on
          the way.
        </p>
        <h2>Intelligent call dispatching will help your team get to work</h2>
        <p>
          When a new customer opportunity arises, our number one goal will be to
          get a member of your staff in on the call. You can let us know who our
          first point of contact should be when a new customer calls in, and
          we’ll briefly put the customer on hold and attempt to reach that
          individual. You can decide to have different people serve as the main
          contact for different days of the week or different plumbing issues.
          Our receptionist staff will always be able to figure out the right
          point of contact, and will give that person the option to have the
          customer’s call transferred over to their line. This is of course a
          best case scenario, as the customer will be able to immediately get
          their questions answered by a member of your staff and setup a time to
          have their plumbing issue addressed.
        </p>
        <p>
          If our virtual receptionist tries but fails to get in contact with
          anyone from your company, your chances at capturing the new customer
          will not dramatically decrease. We’ll take the caller through the new
          customer intake process, collecting information about their plumbing
          issue through customized questions of your choosing. All the
          information we gather will be sent you and your staff’s mobile devices
          via text and/or email message. Once you see that an urgent request has
          come in, you can have someone immediately call the customer back.
          During your call back, customers are likely to be more agreeable and
          understanding, having already spoken with a live representative of
          your company.
        </p>
        <p>
          It shouldn’t take long for you to see the powerful impact our
          plumber’s answering service has on your business. Plumbing customers
          will always require immediate assistance, and we’ll always be there to
          help your business win their trust.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
