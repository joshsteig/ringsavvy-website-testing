import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function DentalService({ location }) {
  const heroData = {
    heading: 'Dental Answering Service',
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
        <title>
          Dental Answering Service | Live Answering Service for Dentists
        </title>
        <meta
          name='description'
          content='Dental Answering Service | Live Answering Service for Dentists | Ring Savvy | Learn More About Our Services Here and Try Free For 7 Days!'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <p>
          At dental offices the phones seemingly never stop ringing. People will
          be calling all day long to book new appointments, change and cancel
          scheduled appearances, ask questions about their insurance coverage,
          and find out information about certain procedures. Even if you have a
          dedicated receptionist staff already in-place, you’ll want to invest
          in additional phone answering coverage from Ring Savvy to make life
          easier for your and your staff, and make sure your office never misses
          out on any new business opportunities.
        </p>
        <h2>Overflow call handling can make A big difference</h2>
        <p>
          The Ring Savvy virtual receptionist team is fully staffed at all hours
          of the day and night, and will be ready to handle all of the incoming
          calls your in-office staff is unable to pick up on its own. For
          example, if you have three receptionists busy on the phone engaging
          with customers, and a fourth call comes in, your office will never be
          forced to put a caller on hold. One of our virtual receptionists will
          be there to pick up the fourth call for you, greet the customer, and
          gather information about the person’s reason for calling.
        </p>
        <p>
          The information our receptionist gathers from your caller will be sent
          to you and your receptionist staff via text and/or email message,
          allowing someone from your team to follow up with the caller at a less
          busy time. Having Ring Savvy’s overflow call handling system in place
          will make a much better impression on calling customers than leaving
          them on hold for several minutes. Providing callers with a live
          immediate response shows callers that your office truly cares about
          their issue, and is always ready to make their dental needs a top
          priority.
        </p>
        <h2>Our receptionists can book appointments too!</h2>
        <p>
          When a person is dealing with a dental emergency, they will in many
          cases not be able to rest until they have made contact with a live
          receptionist from a dentist’s office, and have an actual appointment
          to get help in place. If your office has no one ready to book a caller
          an appointment, you’re likely to miss out on their business, as the
          customer will probably just move on to calling another dentist in your
          area.
        </p>
        <p>
          Part of what makes Ring Savvy a great fit for dentist’s offices is
          that we’re able to provide callers in pain or distress with both a
          live caring voice and the ability to book an appointment right away.
          We’ll always have a highly trained receptionist ready to talk with
          your customers, even if their call comes in the middle of the night.
          You’ll also have the option of allowing Ring Savvy’s receptionists to
          book appointments directly into your business’ calendar. Our
          receptionists will only book emergency appointments into time slots
          that you deem to be available, and will always send you a message to
          inform you of the newly scheduled appointment.
        </p>
        <p>
          If you’re like most dentists, you probably sink a lot of money into
          advertising and generating new leads. Taking advantage of Ring Savvy’s
          advance lead capturing features, such as overflow call handling and
          appointment scheduling will ensure that your office is always able to
          reach its maximum revenue potential.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
