import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function ITService({ location }) {
  const heroData = {
    heading: 'IT Answering Service',
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
        <title>IT Answering Service | Live Answering For IT Companies</title>
        <meta
          name='description'
          content='IT Answering Service | Live Answering For IT Companies | Ring Savvy | Provide Quick Customer Solutions With 24/7 Live Answering From Ring Savvy.'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <p>
          Today, just about every office and place of work relies on computers
          to get things done. When their computers or servers experience issues,
          it usually puts their work days to a complete halt. IT companies never
          know when they’ll be called upon for support, but when a company does
          reach out to them, they expect immediate assistance. With this being
          the case, being able to provide a live answer for all incoming
          customer phone calls is a must.
        </p>
        <p>
          If your IT business doesn’t already have staff answering calls 24/7,
          you’ll want to invest in a high quality phone answering service to do
          it for you. Ring Savvy’s virtual receptionist team is always live, and
          will help ensure that your IT company is able to be there for
          customers when technology fails them.
        </p>
        <h2>Ring Savvy will help you provide 24/7 support</h2>
        <p>
          One of the biggest things any business looks for these days when
          hiring an IT company is 24/7 technical support. If your IT business
          can’t advertise that it provides 24/7 support, it is going to struggle
          to keep up with competitors. Providing the ability to submit a support
          ticket on your website is not enough. When technical disasters strike,
          your customers first thought will always be to call into your service.
          If they are directed to your voicemail during their time of need, you
          can expect your business to start racking up negative online reviews.
        </p>
        <p>
          With Ring Savvy, you’ll be able to advertise that you provide 24/7
          support with confidence. Our call center remains active during all
          hours of the day and night, even during weekends and holidays. We
          always have a large number of virtual receptionists on call, so no
          matter what time a business reaches out for technical support, our
          team will be ready to take action.
        </p>
        <p>
          If a customer reaches out for help hours before your offices open, or
          over the weekend when your offices are closed, one of our virtual
          receptionists will always be there to answer their phone call. We’ll
          make them feel cared for by listening to their problems, empathizing
          with their issue, and letting them know that help is just around the
          corner.
        </p>
        <h2>How we’ll act in urgent situations</h2>
        <p>
          The way we go about contacting you and your colleagues when urgent
          technical support situations arise is largely up to you. One of the
          first things we’ll go over when setting up your Ring Savvy service is
          how you want urgent calls handled and directed.
        </p>
        <p>
          Most IT companies ask that we contact a designated line of their
          choosing (for example the owner’s cell phone) when their business
          receives an urgent request outside of normal office hours. In cases
          where we make contact with someone from your company, we’ll inform
          them on who is calling and what the issue is, before giving them the
          option to have the customer’s call transferred over to their line.
          This allows IT companies to provide customers with support in real
          time, and get to work immediately on solving issues. Ring Savvy also
          offers intelligent dispatching, so if you’d like to have certain
          technicians on call for certain types of issues or on certain nights
          of the week, we’ll always be able to transfer your callers to the
          correct party.
        </p>
        <p>
          If we can’t immediately get in touch with someone from your company,
          your customers will still be in good hands. We’ll offer to take a
          detailed message from the customer, and let them know that it’s being
          passed along to your IT support team right away. That message will be
          sent you in text and/or email form, and can be accessed right from
          your mobile device. Even if you are away from the office, you’ll know
          right away when an urgent support situation is unfolding.
        </p>
        <p>
          Everyone needs someone to lean on for support, and Ring Savvy is
          always prepared to lend IT companies a helping hand.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
