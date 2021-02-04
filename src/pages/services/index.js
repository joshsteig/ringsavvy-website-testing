import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import { Section } from '../../components/section';
import { Wrapper } from '../../components/wrapper';
import { FlexRow } from '../../components/globals';
import Service from '../../components/service';

export default function ServicesIndex({ location }) {
  const heroData = {
    heading: 'Services',
  };

  const services = [
    {
      name: '24/7 Live Answering',
      icon: 'live-answering-icon.svg',
      description:
        'At any hour of the day or night, our virtual receptionist team will be ready to answer calls for your business. Weekends and holidays included!',
      slug: '24-7-live-answering-service',
    },
    {
      name: 'Bilingual Answering',
      icon: 'bilingual-answering-icon.svg',
      description:
        'We employ Spanish speaking receptionist staff that are ready to help your business engage with Spanish speaking consumers.',
      slug: 'bilingual-answering-service',
    },
    {
      name: 'New Customer Intake',
      icon: 'new-customer-intake-icon.svg',
      description:
        'Our virtual receptionists take all first-time callers through a series of questions about their personal information and reason for reaching out to your business.',
      slug: 'new-customer-intake',
    },
    {
      name: 'Live Call Transferring',
      icon: 'live-call-transferring-icon.svg',
      description:
        'With Ring Savvy, you get to decide whether you want to be transferred in on a call, or have our receptionist staff take a message on your behalf.',
      slug: 'live-call-transferring',
    },
    {
      name: 'Advanced Call Screening',
      icon: 'call-filtering-icon.svg',
      description:
        'Let Ring Savvy be your first line of defense to pesky telemarketers. Our receptionists will keep calls that are unrelated to your business from disrupting your day.',
      slug: 'advanced-call-screening',
    },
    {
      name: 'Overflow Call Handling',
      icon: 'overflow-handling-icon.svg',
      description:
        'Our receptionist team can answer any of the calls you can’t get to or don’t want to get to. We’ll help you take a breather, while ensuring you never miss the new customer.',
      slug: 'overflow-call-handling',
    },
    {
      name: 'Message Taking',
      icon: 'message-taking-icon.svg',
      description:
        'Everytime our receptionists speak with one of your customers, you’ll receive a message via text and/or email with the important information from the call.',
      slug: 'message-taking',
    },
    {
      name: 'Appointment Scheduling',
      icon: 'appointment-sched-icon.svg',
      description:
        'Save your business from scheduling disasters! Let Ring Savvy’s virtual receptionists book appointments directly into your favorite scheduling software.',
      slug: 'appointment-scheduling',
    },
    {
      name: '100% Customizable',
      icon: 'customizable-icon.svg',
      description:
        'Our team will work with you to set up customized scripts and protocols, ensuring that our receptionists truly come off as a seamless extension of your company.',
      slug: 'customizable',
    },
  ];

  return (
    <Layout location={location}>
      <Helmet>
        <title>
          Ring Savvy Services: Learn Everything We Have to Offer Here
        </title>
        <meta
          name='description'
          content="Ring Savvy Services - Here's Everything We Can Do, and How You Can Customize it for Your Business. Learn More and Try Our Service Free for 7 Days."
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <Section>
        <Wrapper>
          <FlexRow wrap>
            {services.map((service, index) => {
              const isFirst = index == 0 || index % 3 == 0 ? true : false;

              return (
                <Service
                  key={service.slug}
                  service={service}
                  isFirst={isFirst}
                />
              );
            })}
          </FlexRow>
        </Wrapper>
      </Section>
    </Layout>
  );
}
