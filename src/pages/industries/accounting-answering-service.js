import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function AccountingService({ location }) {
  const heroData = {
    heading: 'Accounting Answering Service',
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
          Accounting Answering Service | Live Answering Service for Accountants
        </title>
        <meta
          name='description'
          content='Accounting Answering Service | Ring Savvy | We Tailor Our Service to Answer For Accounting Firms | Try Us Free For 7 Days'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <p>
          If you’re an accountant that hates being interrupted by calls or just
          isn’t a big fan of phone answering in general, Ring Savvy is the phone
          answering solution you’ve been waiting for. Our 24/7 virtual
          receptionist team can handle any incoming calls accounting firms don’t
          have time for, and can allow busy accountants to focus more on numbers
          than answering phones. Using our answering service is significantly
          cheaper than hiring full-time phone answering staff for your business,
          and will make those long days at the office a lot more bearable.
        </p>
        <h2>Our team always makes a great first impression</h2>
        <p>
          Investing in Ring Savvy’s 24/7 answering service, means that your
          callers will never have to deal with being sent to voicemail again. If
          you can’t get to the phone, or simply don’t want to, our receptionist
          team will always be there to provide your callers with a helpful live
          voice.
        </p>
        <p>
          When using answering services other than Ring Savvy, you’ll be taking
          a calculated risk, as the quality of the receptionist service you’ll
          get can greatly vary and will more often than not, disappoint. What
          makes Ring Savvy different than those other guys is that all our
          virtual receptionist team members go through months of phone answering
          and customer service training before being allowed to answer calls on
          behalf of real companies. Most phone answering services don’t have the
          patience for such extensive training, but we see it as an absolute
          necessity.
        </p>
        <p>
          By the time a Ring Savvy receptionist answers a call on behalf of your
          business, they will have answered hundreds of practice calls before,
          and will know how to best handle any problems your callers present
          them with. With using Ring Savvy there truly is no risk, and the only
          thing you’ll need to calculate, is how much extra money we’re helping
          bring into your business.
        </p>
        <h2>
          We’ll give your business more opportunity to capture new customers
        </h2>
        <p>
          When it comes to lead capturing, providing prospective customers with
          a live answer over the phone means everything these days. Even if your
          current in-office staff is really on its game, they still are only
          going to be able to answer calls during normal office hours. Our
          virtual receptionist team is able to provide your callers with a live
          answer during after hours, weekends, and holidays. Essentially, using
          Ring Savvy gives your accounting business the opportunity to capture
          new leads 168 hours a week instead of just 40. Just imagine how many
          more customers you’ll win over during busy seasons with a team of
          phone answering professionals behind you.
        </p>
        <h4>
          Our virtual receptionists will help you win over new customers by:
        </h4>
        <ul>
          <li>Booking appointments directly into your work calendar</li>
          <li>
            Performing new customer intake on all of your first-time callers,
            with intake questions personalized towards your accounting business
          </li>
          <li>
            Transferring calls over to your smartphone when exciting new
            customer opportunities arise
          </li>
          <li>
            Making all new customer messages available right from your
            smartphone via text and/or email messages
          </li>
          <li>
            Providing both English and Spanish speaking receptionists for your
            customers to speak with.
          </li>
        </ul>
        <p>
          With the option of handing off a large portion of your call handling
          responsibilities to our receptionist team, you’ll never have to worry
          about new leads slipping away. We’ll keep business booming for your
          firm.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
