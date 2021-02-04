import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function OverflowCallHandling({ location }) {
  const heroData = {
    heading: 'Overflow Call Handling',
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
          Overflow Call Handling | Even If You Have a Receptionist, We Can Help.
        </title>
        <meta
          name='description'
          content="Overflow Call Handling | Even If You Have a Receptionist, We Can Help. Ring Savvy | Don't Miss New Business, Make Sure You Always Have Someone Answering!"
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <p>
          With Ring Savvy, your business will never have to stress over the way
          it manages incoming calls. Gone will be the days of placing customers
          on hold for longer stretches of time, and apologizing profusely
          afterwards. Never again will you have to worry about missing an
          incoming call, while you’re on the phone with another person.
        </p>
        <p>
          Thanks to our Overflow Call Handling service, any incoming call to
          your office, that you and your staff can’t pick up, will be answered
          by one of Ring Savvy’s highly trained virtual receptionist team
          members. Our 24/7 receptionist staff will keep your company from
          becoming overwhelmed by the task of handling incoming calls, while
          ensuring your business always get the chance to engage with potential
          new customers. It’s literally like having an extra agent on your
          staff, that never takes breaks.
        </p>
        <h2>What options do you have with live call transferring?</h2>
        <p>
          When signing up with Ring Savvy, one of the first things you’ll do is
          let us know exactly how you’d like us to handle and direct your
          business’ incoming calls. One of our most popular call forwarding
          protocols, especially during a company’s normal hours of operation, is
          rollover call forwarding. Under this type of call forwarding, your
          incoming calls will be forwarded to Ring Savvy’s virtual receptionist
          team only when certain conditions are met.
        </p>
        <h4>What options do you have with live call transferring?</h4>
        <ol>
          <li>
            When an incoming calls goes unanswered after a certain amount of
            rings, an amount which you’ll choose when setting up your Ring Savvy
            account.
          </li>
          <li>
            When there are no open lines for your incoming calls to ring in on.
          </li>
          <li>
            When your office phones or cell phone device is out of service.
          </li>
        </ol>
        <p>
          You can feel confident that when one of your callers is transferred
          over to our virtual receptionist team, they will be in the best
          possible hands. Our receptionists will greet your callers, be able to
          perform new customer intakes on first time callers to your business,
          and can even attempt to transfer certain types of callers to a direct
          line of your choosing.
        </p>
        <h2>What options do you have with live call transferring?</h2>
        <p>
          Missing calls is no longer acceptable for growing businesses. Any
          incoming call could represent an opportunity to win over a new
          customer, and you’ll want to always make sure your company is making
          the right first impression over the phone. With overflow call handling
          from Ring Savvy in place, your callers will never have to deal with
          the frustration of being sent to voicemail. Our call forwarding
          protocols ensure that all callers to your business either get to speak
          with a member of your staff, or a trained live receptionist from ours.
        </p>
        <p>
          It takes time to grow a successful business, and if you and your
          colleagues are stuck answering calls all day long, it will be
          difficult to get anything of value done. Our Overflow Call Handling
          service is ready to help take some of the phone answering pressure off
          your company’s shoulders, and free up your days. You’ll be given the
          time to get real work accomplished, and perhaps even enjoy the
          occasional break.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
