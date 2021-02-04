import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import { Section } from '../../components/section';
import { Wrapper } from '../../components/wrapper';
import { FlexRow } from '../../components/globals';
import Industry from '../../components/industry';

export default function IndustriesIndex({ location }) {
  const heroData = {
    heading: 'Industries',
  };

  const industries = [
    {
      name: 'HVAC',
      description:
        'With Ring Savvy’s 24/7 live answering service, you’ll be able to provide immediate assistance for those in need of heating or air conditioning assistance or repair.',
      slug: 'hvac-answering-service',
    },
    {
      name: 'Dental',
      description:
        'Overflow call handling from Ring Savvy can be a big help for busy dental offices, as we’ll be able to pick up all the customer calls your staff can’t immediately get to.',
      slug: 'dental-answering-service',
    },
    {
      name: 'Pet Grooming',
      description:
        'Devote more time to making pets look fluffy and adorable, and let Ring Savvy help manage your incoming calls. Our receptionist team can even book appointments on your behalf.',
      slug: 'pet-grooming-answering-service',
    },
    {
      name: 'Landscaping',
      description:
        'No need to turn off the lawnmowers. Ring Savvy can handle your business’ incoming calls while you’re busy out in the fields.',
      slug: 'landscaping-answering-service',
    },
    {
      name: 'Construction',
      description:
        'Always stay focused on the task at hand! Ring Savvy virtual receptionists will answer your calls and keep you updated with text and/or email messages throughout the day.',
      slug: 'construction-answering-service',
    },
    {
      name: 'Accounting',
      description:
        'While you’re busy crunching numbers, Ring Savvy’s phone answering team can answer your incoming calls and help your firm capture new customers.',
      slug: 'accounting-answering-service',
    },
    {
      name: 'Automotive',
      description:
        'Overflow call handling from Ring Savvy will make busy mornings at your garage seem a lot less stressful. We’ll make sure your customers never feel like they are being ignored.',
      slug: 'automotive-answering-service',
    },
    {
      name: 'Finance/Mortgage',
      description:
        'Ring Savvy’s call center is always up and running, and will make sure your company is always ready to answer customer questions and take advantage of new opportunities.',
      slug: 'finance-answering-service',
    },
    {
      name: 'IT',
      description:
        'Give your customers the 24/7 technical support they desire. When customers call in outside of normal office hours, we’ll get them connected with a member of your staff in a hurry.',
      slug: 'information-technology-answering-service',
    },
    {
      name: 'Plumbing',
      description:
        'You can’t afford to make customers wait! Ring Savvy’s always live service will help you provide super quick response times, and make sure your phone lines are never clogged up.',
      slug: 'plumbing-answering-service',
    },
    {
      name: 'Heating & Oil',
      description:
        'When heating equipment breaks down or needs to be installed in a hurry, our receptionists will be ready to provide immediate support over the phone.',
      slug: 'heating-oil-answering-service',
    },
    {
      name: 'Door',
      description:
        'When doors break down, your company needs to act quickly. Use a 24-hour answering service to help provide your customers with emergency service and repair.',
      slug: 'commercial-residential-doors',
    },
    {
      name: 'Real Estate',
      description:
        'With Ring Savvy, agents and property owners can maintain a social life while still being available to customers after hours. Our team will answer incoming calls on your behalf and always keep you in the loop on what you missed.',
      slug: 'real-estate-answering-service',
    },
  ];

  return (
    <Layout location={location}>
      <Helmet>
        <title>Industries We Provide Answering Services For | Ring Savvy</title>
        <meta
          name='description'
          content="Industries We Provide Answering Services For | Ring Savvy | Don't See Your Industry Listed? Don't Worry, We Can Answer For You Too. Learn More Here:"
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <Section>
        <Wrapper>
          <FlexRow wrap>
            {industries.map((industry, index) => {
              const isFirst = index == 0 || index % 3 == 0 ? true : false;

              return (
                <Industry
                  key={industry.slug}
                  industry={industry}
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
