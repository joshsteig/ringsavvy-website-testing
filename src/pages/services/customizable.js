import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function TwentyFourSevenService({ location }) {
  const heroData = {
    heading: 'Service Customization',
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
          Service Customization | Customize Every Service We Have to Offer
        </title>
        <meta
          name='description'
          content='Service Customization | Customize Every Service We Have to Offer | Ring Savvy | We Tailor Our Service to Your Business, Try Us Free For 7 Days.'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <p>
          At Ring Savvy, we offer all of our customers a highly personalized
          experience, and make all of our services 100 percent customizable.
          You’ll get to decide exactly how our team of highly trained virtual
          receptionists answers the phones and interacts with your callers, and
          our dedicated support team will work with you to ensure that you’re
          always getting the most out of your Ring Savvy account.
        </p>
        <p>
          One of the biggest reasons we make our service one hundred percent
          customizable, is because we answer calls on behalf of a lot of
          different types of businesses. We know that a construction company is
          going to have different phone answering needs than a law office, and
          we’re ready to accommodate all. The customizable nature of our service
          allows it to easily adapt to the phone answering needs of virtually
          any customer base.
        </p>
        <h2>What are we able to customize?</h2>
        <p>
          When we say that all of Ring Savvy’s services are 100 percent
          customizable, we truly mean all of our services.
        </p>
        <ul>
          <li>
            When using our service, you’ll get to decide how many rings an
            incoming call should go before our virtual receptionist team picks
            up. You’ll also get the chance to decide how we go about forwarding
            your calls throughout the day, and whether you’d like your call
            forwarding to change at different times of day.
          </li>
          <li>
            With our live call transferring, you’ll determine what types of
            callers you always want our team to attempt to transfer to you. For
            example many of our customers always want calls from new prospects
            transferred over to them.
          </li>
          <li>
            You are always notified anytime our receptionist takes a message
            from one of your callers or performs a new customer intake on one of
            your callers. We can send you the details of a new message or
            customer intake in text form, email form, or both.
          </li>
          <li>
            Ring Savvy gives you the chance to effectively capture new leads by
            allowing you to take full control of the way our receptionists greet
            your callers and introduce your business. You’ll also be able to
            completely customize your new customer intake script, and inform our
            receptionist team on exactly what information you want to gather
            from first-time callers to your business.
          </li>
          <li>
            You will also have the option to take advantage of our Appointment
            Scheduling service, and have our receptionist team book appointments
            directly into their calendar.
          </li>
        </ul>
        <p>
          With Ring Savvy’s 100 percent customizable features, the possibilities
          for better serving your customers over the phone are truly endless. To
          learn more, call 631-600-1111, and speak with of our Savvy customer
          service reps.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
