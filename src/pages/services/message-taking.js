import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function MessageTaking({ location }) {
  const heroData = {
    heading: 'Message Taking',
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
          Message Taking | Get The Information You Need From Your Callers
        </title>
        <meta
          name='description'
          content='Message Taking | Get The Information You Need From Your Callers | Ring Savvy | We Ask the Questions You Pre Determine | Try Us Free For 7 Days.'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <p>
          Our Message Taking services have been designed with both reliability
          and convenience in mind, and will allow you to connect with current
          customers and new prospects from both inside and outside of your main
          office.
        </p>
        <p>
          Our virtual receptionist team works 24/7/365, and is available to pick
          up the phone and take messages from your callers at any time. When a
          Ring Savvy virtual receptionist is finished transcribing a new message
          from a caller, they will immediately send that message your way. All
          of the details from a caller’s message are sent to you in text and/or
          email message form, allowing you to easily check on new messages from
          either your computer or smartphone device. You can have new messages
          sent to as many members of your staff as you’d like, making it easy
          for your and your team to stay on the same page.
        </p>
        <h2>How our message taking makes your life simpler</h2>
        <p>
          In order to effectively manage a growing business, you need to be able
          to go out and about, without the stress of potentially missing out on
          new customers. With Ring Savvy’s message taking services, monitoring
          your company’s incoming calls is fast and simple. If you need to go to
          a meeting outside of your office, all you have to do to stay updated
          on new messages is look down at your mobile phone device.
        </p>
        <p>
          When a new message is sent your way, you’ll have the ability to access
          whether a caller is in need of an immediate call back or can be
          reached out to at a later time. Either way, you’ll never have to
          stress over missed calls, and can always give your full attention to
          the task you are currently working on.
        </p>
        <h2>Why you should trust our message taking team</h2>
        <p>
          There are a lot of Message Taking services out there, but few
          answering services put their phone answering staff through the level
          of training that Ring Savvy does. Before any of our virtual
          receptionists are allowed to start answering calls and taking messages
          on behalf of an actual business like yours, they are carefully
          schooled by our receptionist management staff for multiple months. We
          have our trainees watch training videos, shadow other receptionists
          while they work, and even participate in practice calls to hone their
          message taking skills.
        </p>
        <h4>
          While training our receptionists on message taking, there are two
          important things we stress:
        </h4>
        <ol>
          <li>
            <b>Accuracy:</b> We never want to pass on a message to one of our
            customers that includes incorrect information or misspelled words.
            That’s why when training our new receptionists, we make sure they
            understand the importance of carefully listening to the caller, and
            asking the caller to clarify or repeat things they say that may be
            unclear.
          </li>
          <li>
            <b>Efficiency:</b> We put our receptionists through a lot of
            practice phone calls before actually putting them into real call
            handling situations. This level of repetition helps them in learning
            how to work quickly, and getting the message taking work done while
            the phone call is still ongoing. This training allows our
            receptionists to send business owners their customer messages just
            seconds after a call concludes.
          </li>
        </ol>
        <p>
          The amount of effort and attention to detail that Ring Savvy gives to
          its message taking process is truly unmatched. We’re ready to make
          sure new opportunity never passes your business by.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
