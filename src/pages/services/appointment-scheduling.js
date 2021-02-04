import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function AppointmentScheduling({ location }) {
  const heroData = {
    heading: 'Appointment Scheduling',
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
          Appointment Scheduling | We Schedule Appointments With Your Callers
        </title>
        <meta
          name='description'
          content='Appointment Scheduling | We Schedule Appointments With Your Callers | Ring Savvy | Your Calendar Will Be Full Soon, Just Give Ring Savvy a Try.'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <p>
          At Ring Savvy, we’re in the business of making life easier for you and
          your customers. That’s why our company goes above and beyond with what
          our virtual receptionist team is able to provide, and offers advanced
          services such as Appointment Scheduling.
        </p>
        <p>
          Our 24/7 virtual receptionist team is able to book new appointments
          with your callers directly into your work calendar. Our service is
          able to integrate with just about any scheduling software you might be
          using, and setting up the integration is fast and simple. You’ll be
          amazed at how much easier this feature makes it to run your business,
          and how flawless our team is when it comes to managing your calendar.
        </p>
        <h2>How does Ring Savvy work with your calendar?</h2>
        <p>
          If after you’re ten day free trial, you decide to become an official
          Ring Savvy customer, you’ll be given the option to use our Appointment
          Scheduling services. During the setup process, you’ll get to decide
          when our receptionists should give your callers the option to book an
          appointment with you, and how much flexibility our receptionists have
          in booking appointments on your behalf.
        </p>
        <p>
          Ring Savvy’s receptionist team members will always respect the
          integrity of your existing calendar, meaning that they will never
          alter already established appointments or events in your calendar, and
          will never double book you. Our receptionists will only look to book
          appointments with callers in time slots that you have pre-designated
          as available. You’ll also never have to stress over sharing your
          calendar with receptionists you’ve never met before. We use a third
          party software, that not only integrates with your calendar, but keeps
          your other calendar appointments completely confidential.
        </p>
        <p>
          After a receptionist books an appointment with one of your callers,
          you’ll immediately receive a text and/or email message with full
          information on the date and time of the appointment, who you’ll be
          meeting with, and what the meeting will be about.
        </p>
        <h2>Why use our appointment scheduling services?</h2>
        <p>
          As a business owner, your days or more often than not quite busy, and
          there’s a good chance you’ll miss a few calls from prospective
          customers or potential new business partners. Sure you could waste
          precious time at the end of your work day trying to reach these missed
          callers so you can hopefully book an appointment with them, but the
          better option may be to let Ring Savvy’s trained virtual receptionist
          team speak with your callers in real time, and take care of the
          appointment booking for you.
        </p>
        <p>
          Keep in mind that Appointment Scheduling is a completely optional
          service, that comes to our customers at no additional cost. Some
          business owners will feel that it is necessary to speak with a
          potential customer or associate first before booking them an
          appointment, and for those owners, there is still plenty to love about
          Ring Savvy’s 24/7 phone coverage, without utilizing our appointment
          scheduling feature. But, for those that would rather have someone else
          handle appointment booking with their callers, Ring Savvy’s virtual
          receptionist team will prove to be incredibly valuable.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
