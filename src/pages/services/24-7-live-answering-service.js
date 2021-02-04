import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function TwentyFourSevenService({ location }) {
  const heroData = {
    heading: '24/7 Live Answering Service',
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
          24/7 Live Answering Service | Ring Savvy | Real Humans, 24/7.
        </title>
        <meta
          name='description'
          content="24/7 Live Answering Service | Ring Savvy | Real Humans, 24 Hours a Day. Don't Leave Your Callers Hanging, Provide Better Customer Service. Learn More Here:"
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <p>
          The only way to guarantee that your business never misses out on new
          customer opportunities is by making sure you never miss a phone call.
          And the best way to ensure that your business never misses a phone
          call, is by signing up with Ring Savvy’s 24/7 Live Answering service.
        </p>
        <p>
          Ring Savvy’s call center and virtual receptionist team remains active
          at all times. If your office can’t get to a call during the work day,
          one of our receptionists will be able to pick it up on your behalf. If
          a call comes into your office during the middle of the night, our
          receptionist staff will be ready to handle it. If someone tries to
          call your business over the weekend, we’ve got that covered too. Our
          virtual receptionist team will even be ready to field your calls on
          holidays such as Christmas and the Fourth of July!
        </p>
        <h2>What to know about Ring Savvy’s 24/7 live answering coverage</h2>
        <p>
          Our call center based in Long Island, New York is always up and
          running and fully staffed with trained virtual receptionists. We only
          hire receptionists who live within short driving distance of our call
          center facility, ensuring that we always have enough staff members to
          field calls on behalf of the businesses we serve. Our team truly never
          stops working!
        </p>
        <p>
          All of our receptionists have been highly trained on answering phone
          calls for a number of different types of businesses, ensuring that
          they’ll be able to best accommodate your customers’ individual needs.
          Once your caller begins talking with one of our virtual receptionists,
          there are a number of actions we can take.
        </p>
        <ul>
          <li>
            For first time callers to your business, we can attempt to transfer
            the call over to your mobile phone, and give you a chance to engage
            with the caller in real time.
          </li>
          <li>
            When you don’t have time to speak with a new caller, our virtual
            receptionist staff can gather the caller’s information for you
            through our new customer intake process. After the call concludes,
            you’ll receive a text and/or email message with the caller’s
            personal information and reason for reaching out to your business.
          </li>
          <li>
            When an existing customer or associate calls in, our virtual
            receptionists will inform the caller of your absence, let them know
            when they should expect to hear back from you, and offer to take a
            message. Any messages they record will be sent your way via SMS text
            and/or email.
          </li>
        </ul>
        <h2>Why you should invest in 24/7 live answering?</h2>
        <p>
          Simply put, a lot of modern day consumers have stopped waiting on
          voicemail. Your customers typically won’t have the patience to leave
          you a message and wait for you to call them back, when they can easily
          just look up a competing business online and call move on to
          contacting them. If you want to stop letting new customers slip away,
          you need a phone answering service that’s prepared to capture new
          leads 24/7, and that’s just what you get with Ring Savvy.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
