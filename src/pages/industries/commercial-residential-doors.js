import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function DoorService({ location }) {
  const heroData = {
    heading: 'Door Companies Answering Service',
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
          Door Companies Answering Service | Answering For Commercial Door
        </title>
        <meta
          name='description'
          content='Door Companies Answering Service | Ring Savvy | Live Answering For Commercial Door Companies | Providing Sophisticated Dispatching, Learn More Here:'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <p>
          If you run a commercial/residential door company, you know that the
          relationship you have with customers usually doesn’t end after an
          installation. Entrance and loading dock equipment is always failing,
          and customers expect 24/7 emergency support from your company when it
          does.
        </p>
        <p>
          If you and your staff are not currently prepared to answer incoming
          phone calls 24/7, singing up with Ring Savvy is a must. Our
          commercial/residential door company answering service is built to
          thrive in emergency situations, and provide calling customers with
          assistance in real time at any hour.
        </p>
        <h2>Our team will be there to answer calls overnight</h2>
        <p>
          Often problems with entrance and loading dock equipment will be
          identified in the middle of the night or during the early hours of the
          morning. While some companies can afford to wait till morning to
          address technical issues, businesses that provide shipping usually
          can’t. If your business receives a call for repair during hours when
          you don’t have receptionists working on site, you can trust Ring Savvy
          to field the call on your behalf. Our call center is always active and
          fully staffed, and is just as ready to answer an incoming call at 3
          a.m. as we are at 3 p.m.
        </p>
        <p>
          Ring Savvy’s virtual receptionists will always come off as impressive
          to your calling customers. Having dealt with hundreds, and in some
          cases thousands of customer calls before, there is truly nothing that
          will baffle our receptionists. They will always know just what to say
          to calm down distressed customers, and keep things moving towards a
          quick solution.
        </p>
        <p>
          Providing a live voice when urgent repair situations develop will mean
          everything to your customers. Imagine how panicked a shipping company
          will be if their door breaks down early in the morning, and when they
          call for help, they get sent to your voicemail. Using Ring Savvy means
          always have a trained professional ready to speak with customers, and
          never leaving them in the dark during their time of need.
        </p>
        <h2>How we alert you of emergency situations</h2>
        <p>
          When entrance and loading dock equipment breaks down, there is not a
          minute to waste, and our virtual receptionist team will always work
          fast to get a member of your staff on the phone fast. Once our
          receptionist identifies that a phone call is of the emergency nature,
          they will put the customer on hold, and attempt to contact a member of
          your team. Who they try to contact is entirely up to you, and your
          main point of contact can be different depending on the time of day or
          type of repair needed. Once we get your designated point of contact on
          the phone, we’ll let them know who is calling and what type of repair
          they need, before giving them the option to have the customer’s call
          transferred over to their line.
        </p>
        <p>
          Being able to provide customers with real time support at any hour of
          the day can truly be a game changer for your business. If you help a
          customer resolve an emergency situation with no or minimal delay to
          their work day or night, you can expect them to be incredibly
          grateful. Providing this level of elite 24/7 customer service should
          lead to plenty of repeat business and new referrals for your company.
          Ring Savvy will make sure you’re never closing any doors for new
          financial opportunity.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
