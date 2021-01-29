import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function HeatingAndOilService({ location }) {
  const heroData = {
    heading: 'Heating/Oil Companies Answering Service',
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
        <title>Heating/Oil Companies Answering Service | Ring Savvy</title>
        <meta
          name='description'
          content="Heating/Oil Companies Answering Service | Ring Savvy | Don't Leave Your Customers Out in the Cold. Provide the Best Customer Service With Ring Savvy."
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <p>
          When temperatures reach freezing conditions, the calls will always
          start pouring in for heating/oil companies. A lot of people will
          either have a home or office space that’s not properly prepared for
          brutal winter weather, or have older heating equipment that has
          malfunctioned. In either case, those people will be looking for
          immediate assistance from a heating/oil provider, and your company
          needs to be ready to answer their calls.
        </p>
        <p>
          The best way to ensure your business has the ability to help as many
          people as possible this winter, and doesn’t give potential customers
          the cold shoulder, is to use a widely trusted phone answering service
          like Ring Savvy. We’ll always be there to offer your customers
          exceptional support, and help your company take advantage of busy
          seasons.
        </p>
        <h2>Our receptionist team is always on call</h2>
        <p>
          Ever wake up in the morning and already feel like your business is way
          behind? It’s certainly not a great feeling to get to the office and
          learn that your company has several missed calls from the early hours
          of the morning. Sure you can go to call the person back, but in many
          cases that potential customer has already moved on to calling other
          heating/oil providers for help.
        </p>
        <p>
          When using Ring Savvy’s heating/oil company answering service, those
          frantic mornings will be a thing of the past. Our virtual receptionist
          team operates on a 24/7 basis, is always fully staffed and ready to
          answer incoming calls. No matter when a caller reaches out to your
          business, we’ll be there to provide them with live support. We’ll be
          there to let them know that they have reached a place where they can
          get immediate heating support, and begin the process of turning them
          into a customer.
        </p>
        <h2>Live call transferring can make all the difference</h2>
        <p>
          Your best chance at winning over customers in need of immediate
          heating repairs or installations, is getting on the phone with them
          right away. Ring Savvy knows this, which is why we offer live call
          transferring to all heating/oil business.
        </p>
        <p>
          When signing up with Ring Savvy, you’ll let us know who from your
          staff to contact when a new potential customer calls in, and our
          highly trained receptionists will take care of the rest. Our
          receptionist will briefly place the customer on hold, and give the
          designated direct line of your choosing a call. They’ll let your
          contact know who is calling and their reason for calling, and give
          them the option to have the customer’s call transferred over to their
          line. Ring Savvy also provides intelligent call dispatching, so if
          you’d like certain members of your team to be a designated contact
          during certain days or times, we’ll have no problem accommodating.
        </p>
        <p>
          The end result of live call transferring will be your business getting
          to talk with customers in real time, and getting a head start on
          addressing their urgent issues. Imagine how much more satisfying it
          will be for a distressed customer to be able to book and appointment
          to get help, rather than just leaving a voicemail and hoping they hear
          back soon. In many cases, providing immediate support over the phone
          will be the difference between getting and not getting a new
          customer’s business. Ring Savvy’s exceptional lead capturing team will
          make sure your new opportunities never become competitor’s new
          opportunities.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
