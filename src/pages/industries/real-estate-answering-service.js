import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function RealEstateService({ location }) {
  const heroData = {
    heading: 'Real Estate Answering Service',
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
          Real Estate Answering Service - Answering For Real Estate Companies
        </title>
        <meta
          name='description'
          content='Real Estate Answering Service | Ring Savvy | Provide Better Customer Service to Your Clientele | Providing the Best Virtual Receptionists, Learn More Here:'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <p>
          As a real estate agent or property manager, some of the most important
          work you’ll do will be outside of normal business hours. Since most of
          your customers will be at their jobs from 9 a.m. to 5 p.m. during
          weekdays, after hours and weekends will typically end up being prime
          customer service hours. People will always be calling you with
          questions, and looking to take swift action when new exciting
          opportunities arise. Not to mention a lot of open house events take
          place on the weekend, so being ready to answer phone calls 24/7 is a
          must.
        </p>
        <p>
          In order to effectively balance working for multiple customers at the
          same time, and maintain some semblance of a social life, you’ll want
          to turn to Ring Savvy for additional phone answering support. Our call
          center remains fully staffed during after hours and weekends, and
          allows real estate agents and property managers to provide their
          customers with the 24/7 support without the pressure of having to
          answer every incoming call themselves.
        </p>
        <h2>We’ll keep you in the loop while out of office</h2>
        <p>
          When using Ring Savvy, real estate agents and property managers don’t
          have to stress about leaving the office at 5 p.m. every day. Our
          virtual receptionist team will still be available to answer calls
          after hours, and your ability to serve customers won’t be at all
          restricted when you’re away from your desk phone.
        </p>
        <p>
          Let’s say one of your current customers calls into your office around
          dinnertime. Since you are no longer at the office, the call will be
          picked up by one of our highly trained virtual receptionists. Our
          receptionist will greet the caller and let them know the business they
          have reached, before moving on to asking how they can be of
          assistance. Once our receptionist takes note of who is calling and
          there reasons for calling, they will move on to reaching out to a
          designated direct line of your choosing.
        </p>
        <p>
          Ring Savvy is able to perform intelligent dispatching, so if your
          office has dedicated maintenance teams for dealing with specific
          problems, or prefers different agents to be on call during after hours
          and weekends, it’s never an issue. Our receptionist will be able to
          intelligently discern which type of matter requires the correct
          individual’s attention, and transfer the call to that person
          immediately. If you’d like to handle all after hours and weekend calls
          yourself, we can always make you the first point of contact. In any
          case, your customers will be able to talk with a representative of
          your company in real time, and will feel that their needs are being
          fully addressed.
        </p>
        <h2>What happens if I can’t get to the phone?</h2>
        <p>
          If our Ring Savvy receptionist is unable to get in touch with a member
          of your company, you don’t need to worry. Our receptionists have been
          extensively trained on proper message taking, and will be able to
          provide you with accurate and detailed messages from your customers.
          Those message will be sent to you via text and/or email, allowing you
          to keep track of incoming messages right from your mobile device. It
          really is that simple.
        </p>
        <h2>What if a new lead calls in after hours?</h2>
        <p>
          At Ring Savvy, we take pride in our receptionists’ exceptional lead
          capturing abilities. When a person calls into your business for the
          first time, and you can’t be reached, our receptionist will have no
          issue accommodating your new prospect. Using information provided by
          you, they will be able to answer any FAQs prospective customers might
          have about your company. Ring Savvy receptionists are also well
          schooled in performing the new customer intake process. Our
          receptionist will take your caller through a series of information
          gathering questions (which can be personalized to your liking), and
          send the info the collect to your mobile device in message form once
          the call concludes. In just about any scenario, Ring Savvy’s team will
          be able to make your customers feel at home, and allow you to actually
          enjoy your time away from the office.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
