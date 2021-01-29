import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import Tabs from '../../components/tabs';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';
import EmailSection from '../../components/emailSection';
import ValueGrid from '../../components/valueGrid';

export default function LongIslandAnsweringService({ location }) {
  const heroData = {
    heading: 'Long Island Answering Service',
  };

  const contentData = [
    {
      id: 1,
      heading: 'Looking for a Long Island Answering Service?',
      content:
        'Meet the Ring Savvy team! Our team of virtual receptionists provides superior phone answering services to hundreds of businesses across the country, including overflow call handling, live call transferring, and new customer intake. Perhaps the best part about our service is that you don’t have to be on Long Island to use it.',
    },
    {
      id: 2,
      heading: 'What makes Ring Savvy a Long Island Answering Service?',
      content: [
        'Well our one and only call center is located in Long Island, New York. Our company was founded on Long Island in 2013, and has remained there ever since. In addition, Ring Savvy’s entire staff is made up of Long Island residents. Our CEO, managers, sales staff, marketing team, and our virtual receptionists, all live just minutes away from our call center location.',

        'Why should any of this matter to you? Because having our entire Ring Savvy team located in one place allows us to provide business owners with the very best phone answering coverage. Here’s how:',
      ],
    },
    {
      id: 3,
      heading: 'Why Ring Savvy is the best answering service for you',
      content: [
        'Ring Savvy will serve as the ultimate lead capturing safety net for your business. Never again will you miss out on a potential customer, because you failed to provide them with a live voice or offered subpar phone answering assistance.',

        'Our receptionists will act as a representative of your business, letting your caller know who they have called, and taking all first time callers to your business through your personal new customer intake process.',
      ],
    },
  ];

  const gridData = [
    {
      heading: 'State of the art call forwarding',
      content:
        'Choose when you’d like to answer calls for your business, and when you’d like calls to be automatically forwarded to our team.',
      ctaLink: '/services/overflow-call-handling/',
    },
    {
      heading: 'Customizable to fit your business',
      content:
        'Personalize everything from the questions we ask first-time callers to your company, to the way we go about transferring your calls.',
      ctaLink: '/services/overflow-call-handling/',
    },
    {
      heading: 'Always live, 24/7/365',
      content:
        'Our call center is always up and running, and fully staffed with both English and Spanish speaking receptionists. We don’t even take holidays off.',
      ctaLink: '/services/overflow-call-handling/',
    },
  ];

  const tabData = [
    {
      heading: 'We never outsource calls',
      content: [
        'If you’re using our Long Island Answering Service, a virtual receptionist from our call center will always be handling your calls.',

        'This allows us to closely monitor the performance of our virtual receptionists on the phone, and ensure that they’re always meeting Ring Savvy’s high call handling standards.',
      ],
    },
    {
      heading: 'Our phone answering staff is elite',
      content: [
        'All of our virtual receptionist team members have been carefully vetted by our managing staff and have gone through months of phone answering training before being allowed to answer calls on behalf of your business.',

        'This once again guarantees that the receptionist service you get from Ring Savvy is of the highest quality.',
      ],
    },
    {
      heading: 'Our team never stops working',
      content: [
        'Having just one call center location allows us to carefully monitor our phone systems, and keep technical issues to a minimum.',

        'Even when your business experiences phone outages during inclement weather, you can expect our Long Island Answering Service to stay up and running, answering customer calls on your behalf.',
      ],
    },
  ];

  return (
    <Layout location={location}>
      <Helmet>
        <title>
          Long Island Answering Service | Need an Answering Service on LI?
        </title>
        <meta
          name='description'
          content='Long Island Answering Service | Need an Answering Service on LI? Choose Ring Savvy | 24/7 Virtual Receptionists, Customizable Features. Try Free For 7 Days!'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <ValueGrid
        contentData={contentData.find((data) => data.id === 1)}
        gridData={gridData}
      />
      <EmailSection />
      <Tabs
        contentData={contentData.find((data) => data.id === 2)}
        tabData={tabData}
        horizontal
      />
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 3)} />
    </Layout>
  );
}
