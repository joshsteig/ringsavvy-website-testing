import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function AutomotiveService({ location }) {
  const heroData = {
    heading: 'Automotive Answering Service',
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
          Automotive Answering Service | Live Answering For Auto Businesses
        </title>
        <meta
          name='description'
          content='Automotive Answering Service | Ring Savvy | Live Answering For Automotive Businesses | Read More About Our Features Here and Try Free For 7 Days.'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <p>
          For those running automotive repair shops, the day starts early, but
          rarely ever begins easy. As soon as you open, you need to quickly get
          to work on repairing vehicles that were left overnight in your lot,
          and helping a line full of people looking to drop cars off. With not a
          moment to spare, the task of answering incoming calls will often make
          you want to pull your hair out.
        </p>
        <p>
          For those tired of stressful mornings, there is a phone answering
          service that can help. Ring Savvy’s virtual receptionist team has
          aided countless overwhelmed businesses in better managing their phone
          lines, and is ready to do the same for yours.
        </p>
        <h2>Overflow call handling will allow you to take a breath</h2>
        <p>
          We know that auto repair shops experience a lot of pressure to answer
          calls live, and that sending callers to voicemail often results in
          potential customers turning to your competitors for help. Ring Savvy
          will make sure that your callers never reach your voice mailbox, as we
          not only operate on a 24/7/365 basis, but have a call center that is
          always fully staffed with trained virtual receptionists. As a Ring
          Savvy customer, you’ll always have our team at your disposal, and if
          there is a morning where you are too busy to answer a single call on
          your own, you can trust our receptionists to answer all of the calls
          on your behalf. Our receptionists will greet your callers, operate in
          a polite and professional manner, and ensure that your customers never
          feel neglected or grow frustrated with your business.
        </p>
        <p>
          Just imagine having the ability to pick and choose when you want to
          answer customer calls. Imagine being able to finish a conversation
          with a customer in your shop, even with a ringing phone in the
          background. With Ring Savvy it’s all possible!
        </p>
        <p>
          Even if you already have receptionist help at your garage, overflow
          call handling from Ring Savvy will still prove to be an incredibly
          valuable backup resource. When receptionists are forced to constantly
          multitask—for example trying to perform intake on a calling customer
          while running a payment for another customer—mistakes get made, and
          your company suffers for it. Our virtual receptionists will only focus
          on one customer at a time, and can always be trusted to do their job
          right.
        </p>
        <h2>Our receptionists go above and beyond</h2>
        <p>
          When you turn over a call to one of Ring Savvy’s virtual
          receptionists, you’re not just getting a trustworthy live voice. All
          of our receptionists have been carefully trained in taking customer
          messages, performing new customer intake, and appointment scheduling.
        </p>
        <p>
          If a customer calls into your shop asking for an update on the car
          they dropped off, our receptionist can take their message, and send
          that message to you via text and/or email message. You’ll be able to
          view the message right from your mobile device, and provide the
          customer with an update at your next free moment.
        </p>
        <p>
          When a person calls looking to bring a car in for maintenance or
          repair, we’ve also got you covered. Our virtual receptionist will be
          able to help you win over new business, by answering FAQs about your
          repair shop. When signing up as a Ring Savvy customer, you’ll tell us
          noteworthy things that our virtual receptionists should know about
          your business (for example the price of a standard oil change), and
          we’ll make sure that information is always available to your callers.
        </p>
        <p>
          Our receptionists will also perform new customer intakes on anyone
          interested in bringing their car in, so you’ll be able to best prepare
          for their arrival. We can send you text and/or email messages after
          the intake is performed, that includes the customer’s personal
          information, as well as info like the make and model of their vehicle,
          and their reason for bringing the vehicle in.
        </p>
        <p>
          Finally, you’ll have the option to let our receptionists book new
          appointments directly into your work calendar. You’ll let us know
          which time slots are open for booking and we’ll work diligently within
          your preferred schedule. At Ring Savvy there is very little we can’t
          do, and your mornings will be much better because of that.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
