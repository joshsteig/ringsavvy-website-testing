import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function LandscapingService({ location }) {
  const heroData = {
    heading: 'Landscaping Answering Service',
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
          Landscaping Answering Service | Live Answering for Landscaping
        </title>
        <meta
          name='description'
          content='Landscaping Answering Service | Live Answering for Landscaping | Capture More Leads and New Business With New Customer Intake. Learn More Here:'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <p>
          If you run a landscaping business, chances are you aren’t sitting
          around at a desk all day. Most people who manage the day-to-day
          operations of a landscaping company are usually out in the field,
          either overseeing their crew’s performance or hard at work themselves.
          With your hands already full, answering incoming calls from current
          and prospective customers can become an exhausting task. That’s why
          all who own landscaping businesses should look to make their lives
          easier by investing in a landscaping answering service like Ring
          Savvy. Our virtual receptionists can help you stay more organized
          throughout the day and always be ready to impress when new customer
          opportunities arise.
        </p>
        <h2>We’ll answer your calls and keep you in the loop</h2>
        <p>
          While you’re out on various jobs, and the noise level is incredibly
          high, you don’t have to feel the pressure of constantly checking your
          phone or finding a quiet place to answer incoming calls. As a Ring
          Savvy customer, you can request to have all the calls you can’t answer
          yourself forwarded to our nice and quiet call center. Our virtual
          receptionist team remains active 24/7, even on weekends and holidays,
          and will be prepared to answer all of the calls you can’t get to.
        </p>
        <p>
          When our receptionist picks up one of your calls, they will be able to
          quickly determine if the call is from one of your existing customers,
          or a person interested in using your landscaping services for the
          first time. When existing customers dial in, our receptionists will
          offer to take a message from the caller, and then send that message
          your way via text and/or email message. You’ll have the ability to
          review your messages at your own pace, and determine whether a
          customer requires immediate attention or can have their message
          addressed at a later time.
        </p>
        <p>
          When it comes to new customer opportunities, you’ll get to decide
          whether we should always attempt to transfer the call back over to
          you, or have one of our receptionists handle the call and take the
          prospect through our new customer intake process. In either case,
          you’ll always be giving your business the best chance to capture new
          leads. The information we gather during new customer intakes will be
          sent to your mobile device just like messages from existing customers,
          so you’ll always be in the know when new opportunity arises for your
          business. It will always be clearly stated in the message whether the
          caller is a prospective or existing customer.
        </p>
        <h2>Advanced lead capturing services</h2>
        <p>
          Ring Savvy is one of the best phone answering services on the market
          today, because we go beyond just fielding calls and taking messages.
        </p>
        <h4>What options do you have with live call transferring?</h4>
        <ul>
          <li>
            <b>Appointment Scheduling:</b> Our receptionists have the ability to
            book landscaping appointments for you callers, and do so directly
            into your personal calendar. Your customers will be thrilled to
            learn they can book an appointment right away, rather than having to
            wait for a call back at a later time.
          </li>
          <li>
            <b>Bilingual Phone Answering:</b> Ring Savvy always has Spanish
            speaking receptionists on the clock, and will be to help your
            business engage with any callers that speak Spanish as their primary
            language.
          </li>
          <li>
            <b>New Customer Intake:</b> You’ll have full control over the
            questions we ask your first-time callers. You’ll always have an idea
            of what a potential customer is looking for from your business,
            before deciding to move forward with them as a customer.
          </li>
        </ul>
        <p>
          Utilizing features like the ones listed above will give your
          landscaping business the chance for significant growth, and the
          ability to dominate the competition.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
