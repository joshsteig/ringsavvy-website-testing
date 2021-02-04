import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function CleaningService({ location }) {
  const heroData = {
    heading: 'Cleaning Answering Service',
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
          Cleaning Answering Service - Ring Savvy - Premium 24/7 Live Answering
        </title>
        <meta
          name='description'
          content='Cleaning Answering Service - Ring Savvy - Premium 24/7 Live Answering - Learn More About Our Answering Services for Cleaning Companies Here!'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <p>
          Companies that provide cleaning services to clients can often have
          hectic schedules, as customers and clients are usually in need of
          moving their appointments around. It’s important to make sure that
          you’re able to keep up with the schedules of your customers, so that
          you can do the best job of providing cleaning services. Whether it be
          commercial cleaning or residential cleaning services, you need a team
          of receptionists that are able to help you coordinate with your
          customers’ ever-changing needs, and help you get your people to the
          right place at the right time.
        </p>
        <h2>
          Our appointment scheduling and message taking services can help you
          manage your busy schedule
        </h2>
        <p>
          Having to travel to customer locations puts an extra moving part into
          any business operation, especially as you continue to grow and have
          more staff traveling to more locations. On top of managing your staff,
          managing phone calls from customers whose needs are constantly
          changing can be extremely challenging. That’s why having an
          appointment scheduling service that can help you keep your calendar
          organized. It can help you keep track of when your staff needs to go
          to specific locations. If your schedule isn’t kept accurately or
          organized by a professional, it can cause your business to miss
          appointments, show up late, and lose out on potential new customers.
        </p>
        <p>
          That’s why Ring Savvy is such a powerful tool for companies that
          provide cleaning services. By having an answering service for cleaning
          services, you can rest assured that all incoming calls from customers
          will always be handled by a real representative of your office.
          Customers who need to schedule times for you to clean their locations
          are going to be scheduled according to your availability. We never
          double book, and will always include important information about the
          callers’ requests.
        </p>
        <h2>
          Our message taking services can help you avoid confusion and do a
          better job for your customers.
        </h2>
        <p>
          When it comes to cleaning services, getting accurate information about
          what your customers need is paramount to the success of your business
          and your customer retention. If any small detail is lost in the mix,
          it could cost you a customer. That’s why at Ring Savvy, we let you
          customize all of the information that you need from your callers, so
          that you always get the important information delivered to you in real
          time. Not only that, but we don’t charge extra for any additional
          features or any customizations that you need to make. So if you need
          to make a change to the way our virtual receptionists take down
          messages, what information they gather, or even where you want your
          messages to be sent, you can do it instantly via our 24/7 live support
          team.
        </p>
        <h2>Our Virtual Receptionists Are Trained in Live Dispatching Too</h2>
        <p>
          Accidents happen, and cleaning services sometimes need to be ready to
          mobilize quickly, as giant messes can be made. At Ring Savvy, we help
          businesses dispatch their team members every day to show up at the
          right location, with the right equipment, to get the job done. With
          cleaning services, it’s not much different. If a customer of yours has
          an emergency mess that needs cleaning, and calls your office to get it
          handled, we can dispatch the correct, on-call member of your business
          to go provide a solution quickly.
        </p>
        <h2>Never Miss Out On Potential New Customers</h2>
        <p>
          Getting long term customers can be difficult for cleaning companies.
          That’s why it’s so important to never miss a phone call – the one call
          you miss could end up becoming a huge account for your business! By
          having a 24/7 live answering service like Ring Savvy always at your
          side, you ensure that you never miss out on obtaining new business by
          sending that caller to voicemail.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
