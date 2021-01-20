import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function HVACService({ location }) {
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
          HVAC Answering Service | Live Answering Service for HVAC Companies
        </title>
        <meta
          name='description'
          content="HVAC Answering Service | Live Answering Service for HVAC Companies | Ring Savvy | 24/7 Live Answering To Keep Your Callers' Climates Comfortable."
        />
      </Helmet>
      <Hero />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <p>
          If you’re running an HVAC company, you typically won’t get a second
          chance to capture a new customer. Your business always needs to
          provide a live answer on that first phone call from a new customer.
          That’s why all HVAC related businesses must take advantage of Ring
          Savvy’s 24/7 live answering service. Our virtual receptionist team is
          available to answer all of the incoming calls you and your staff can’t
          get to throughout the day and night. They’ll know exactly how to
          interact with your distressed callers and will keep new customer
          opportunities from passing your company by.
        </p>
        <h2>HVAC consumers aren’t looking to shop around</h2>
        <p>
          People dealing with a heating or air conditioning issue want help as
          quickly as possible, and when searching for assistance, will often go
          with the first business that provides them with a live answer and
          comes across as competent over the phone. Very few consumers, if any,
          will leave an HVAC business a voicemail message and patiently wait for
          a call back, while their family or place of work suffers without heat
          during the winter or without AC during the summer. When using Ring
          Savvy, you’ll always be able to provide consumers in urgent situations
          the immediate live attention they are looking for.
        </p>
        <h2>Provide callers emergency assistance in real time</h2>
        <p>
          With our virtual receptionists working on behalf of your HVAC company,
          your callers will never have to wait more than a few rings to speak
          with a live person. Even if they call in the middle of the night, we
          will have a trained representative for them to speak with. When
          customers call in regarding emergency issues, our receptionists will
          have the ability to transfer the call over to you or a trusted
          technician right away. For HVAC companies, Ring Savvy offers an
          on-call dispatch system. Under this system, you can put specific
          technicians on call for certain nights, and when an emergency
          situation arises, we’ll know to contact the technician you designate
          for that time slot first.
        </p>
        <p>
          Having Ring Savvy dispatch your technicians when you don’t have staff
          readily available can make your business operate more smoothly, and
          will ensure a timely response for your customers. We will of course,
          let your technicians know where they are going, what type of issue the
          customer is having, and then let the customer know how far away help
          is.
        </p>
        <h2>Additional features for HVAC companies</h2>
        <p>
          For less time-sensitive HVAC issues, our receptionists can take your
          callers through the new customer intake process. We’ll gather all of
          your caller’s personal information, as well as details like what type
          of heating or AC issue they are dealing with and how quickly they are
          looking to be helped. All of the information we gather will be sent
          your way via text and/or email message, allowing you to always stay on
          top of new customer opportunities, even if you’re out of office
          working another job. Our receptionists are even capable of booking
          installation or repair appointments directly into your calendar,
          saving your from having to make additional calls.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
