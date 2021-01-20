import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function AdvancedScreening({ location }) {
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
          Advanced Call Screening | We'll Find Out All The Important Information
        </title>
        <meta
          name='description'
          content="Advanced Call Screening | We'll Find Out All The Important Information | We Follow Your Instructions, and Can Patch Calls Into You. Learn More Here:"
        />
      </Helmet>
      <Hero />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <p>
          Tired of telemarketers and robocalls disrupting your day? Advanced
          Call Screening from Ring Savvy can put a stop to it.
        </p>
        <p>
          When signing up with Ring Savvy, you’ll essentially be placing a phone
          answering buffer between you and your callers. Our virtual
          receptionist team has been carefully trained in screening incoming
          callers, and quickly determining whether a call is of a scam, spam or
          sales related nature. In essence, we make sure that you only have to
          dedicate time to calls relevant to your business.
        </p>
        <h2>How does advanced call screening work?</h2>
        <p>
          Our virtual receptionist team works 24/7, answering every single one
          of the calls you and your staff can’t get to. Before even considering
          transferring a call over to your designated direct phone line, our
          receptionists will ask callers for their name and their reason for
          calling. If their answers to these questions indicate that they aren’t
          a prospective customer or someone relevant to your business, we’ll
          make sure not to patch their call to you.
        </p>
        <p>
          Robocalls will immediately be hung up on and have their numbers
          blocked. Telemarketers, that are clearly running a scam or trying to
          sell something unrelated to your business will be politely turned
          away. If a sales call comes in that seems like it could be relevant to
          your company, our receptionist will take a message and send it to you
          after the call concludes in text and/or email message form. Doing this
          ensures that the sales call doesn’t disrupt your day, while still
          allowing you to review the details of the call at a later time.
        </p>
        <h2>Let us help keep your work days on track</h2>
        <p>
          Advanced Call Screening from Ring Savvy is designed to save you two
          things. The first thing is time. There are only so many hours in the
          day, and dealing with non-stop calls will often keep you from
          completing important work tasks. Not to mention, it can be difficult
          to immediately get back into the flow of working after fielding
          multiple irrelevant phone calls. Utilizing Ring Savvy’s virtual
          receptionist team will guarantee that you’re only interrupted by phone
          calls that are actually worthy of your valuable time.
        </p>
        <p>
          The second thing our Advanced Call Screening service will save you
          from is aggravation. Running a business can be extremely stressful,
          and dealing with bothersome phone calls all day is additional stress
          you don’t need. Our team of phone answering professionals will deal
          with the annoying telemarketers and robocalls for you, and help with
          keeping your blood pressure in a healthy place. With more time and
          less stress, you’ll be able to tackle each work day in the best
          possible state of mind, and there will be no limit to what you can
          accomplish.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
