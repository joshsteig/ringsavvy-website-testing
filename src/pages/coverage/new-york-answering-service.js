import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function NewYorkAnsweringService({ location }) {
  const heroData = {
    heading: 'New York Answering Service',
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
          New York Answering Service | Live Answering Service in New York
        </title>
        <meta
          name='description'
          content='New York Answering Service | Live Answering Service in New York | Ring Savvy | Looking for Virtual Receptionists in New York? Look No Further.'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <p>
          Sure, you might think all answering services are equal, but Ring Savvy
          is a New York answering service, and we like to let everyone know
          about it. Most other answering services have multiple locations and
          claim to hail from one location, but many of their agents are not
          inside their offices, and instead work from home! This means that
          someone who works for your answering service can have never met anyone
          within the company face to face, and simply puts on a headset on
          his/her couch in his/her living room and answers your professional
          business calls. Our New York answering service has a higher standard.
          All of our virtual receptionists and staff are in-house, meaning we
          can better control the quality of every call and can monitor calls
          throughout the entirety of the day.
        </p>
        <h4>
          Here are some reasons why our New York answering service is your best
          choice:
        </h4>
        <ul>
          <li>
            In-house receptionists means our quality control inside the office
            fosters a sense of professionalism and inspires our receptionists to
            remain polite and objective. There are no agents working from the
            comfort of a couch, where they might not feel as professional and
            will therefore not exert the right impression to your callers.
          </li>
          <li>
            Since New York is the city that never sleeps, our New York answering
            service does not sleep either! We are 24/7/365, so you literally
            never miss a call.
          </li>
          <li>
            We only have one location, so you don’t have to call multiple
            offices to find an answer to your questions. Our New York answering
            service is just that: New York! Even better, our prices are so
            competitive you will not believe how much you overpaid for inferior
            services prior to Ring Savvy.
          </li>
        </ul>
        <h2>New York Answering Service Free Trial</h2>
        <p>
          Call Ring Savvy for a free trial of our New York answering service,
          even if you are not from New York or you have never been to New York!
          Trust us, you’ll love the service and this awesome State. 10 Day Free
          Trial when you sign up!
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
