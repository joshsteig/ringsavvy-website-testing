import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function CleaningService({ location }) {
  const heroData = {
    heading: 'Electrician Answering Service',
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
          Electrician Answering Service - Ring Savvy - Premium 24/7 Live
          Answering
        </title>
        <meta
          name='description'
          content='Electrician Answering Service - Ring Savvy - Premium 24/7 Live Answering - Learn More About Our Answering Services for Cleaning Companies Here!'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <p>
          Electrical work is dangerous. You can’t afford to be constantly
          distracted by incoming calls when you’re up a ladder installing
          lighting fixtures or rewiring a breaker box. Even if you have years of
          experience under your belt, just a minor slip-up can mean a major fall
          or shock. You can’t answer every call that comes in while you’re on
          the job, but you also can’t afford to let the potential business those
          calls represent pass you by either.
        </p>
        <p>
          If you want to make sure you’re not letting any business slip through
          your fingers while also maintaining total focus on the job at hand,
          you need to invest in a professional answering service. Ring Savvy’s
          team of virtual receptionists will answer your calls 24/7, meaning you
          can finish your work without interruption and without risking an
          accident.
        </p>
        <h2>Customers Don’t Want To Wait For Service</h2>
        <p>
          While there’s plenty of electrical work that isn’t urgent, there’s
          also a few kinds of jobs that are. If a customer’s concerned there’s
          an issue with their wiring causing a short, for example, they’re going
          to want an electrician over quickly to make sure there isn’t a danger
          of fire. If you’re on the job when they call, you need someone
          answering your calls so that you can focus. With Ring Savvy’s 24/7
          team of receptionists supporting your business, you can be sure you’ll
          never miss a customer’s call.
        </p>
        <p>
          The last thing you want is for a customer to reach your voicemail and
          decide to call another electrician. If your customers speak to a
          virtual receptionist instead of your voicemail, they’ll feel like your
          company values their business, and will be more willing to wait for
          you to call them back. Additionally, our virtual receptionists will
          send you information about each of your calls they handled via text
          and email messages, so once you’ve climbed down your ladder you can
          review those messages and start making follow up calls.
        </p>
        <h2>Capture Customers With Appointment Scheduling And Intake</h2>
        <p>
          Of course, the best way to make sure new customers stick with your
          company is to speak to them yourselves. That’s why Ring Savvy offers
          customizable call protocols, so that if you still want to speak to new
          customers, our virtual receptionists can reach out to you whenever one
          calls. If you decide to take the call, you’ll get it transferred to
          you immediately.
        </p>
        <p>
          If you can’t speak to a new customer right away, our virtual
          receptionists can perform new customer intakes. You can use one of our
          scripts, or come up with your own, that way you can be sure that
          you’re capturing as much information as you can. Customers who
          describe their problem to one of our virtual receptionists will feel
          like they’ve already started hiring your company to solve their
          problem. Once the call is finished, you’ll receive a text or email
          with all of that customer’s information, so you can follow up as soon
          as you can.
        </p>
        <p>
          And, if you’d like to go even further, our virtual receptionists can
          even schedule appointments right into your calendar. A customer who
          already has an appointment is unlikely to hire another electrician,
          after all. And you won’t have to worry about being overbooked; we’ll
          only schedule appointments on dates and times you’ve already approved,
          so you won’t ever have to cancel on a customer.
        </p>

        <p>
          Lastly, if you’ve got a few technicians working for you, our service
          can function as your dispatcher. When a customer calls in reporting a
          power outage despite the power company saying there are no issues, our
          virtual receptionists will reach out to your technician on call to
          send them over right away to investigate the issue. We here at Ring
          Savvy offer all this because we want to make sure you never miss out
          on new business and we want to give your company the best chance at
          success we can.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
