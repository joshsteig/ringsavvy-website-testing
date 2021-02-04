import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function PetService({ location }) {
  const heroData = {
    heading: 'Pet Grooming Answering Service',
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
          Pet Grooming Answering Service | Live Answering for Pet Groomers
        </title>
        <meta
          name='description'
          content='Pet Grooming Answering Service | Live Answering for Pet Groomers | Ring Savvy | Our Appointment Scheduling Will Keep You Busy and Making More Money.'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <p>
          Dogs and cats never seem to stay clean for too long, which is why if
          you open a Pet Groomer’s shop, you’re likely to become one of the
          busiest spots in town. In order to effectively handle all of your
          grooming company’s incoming calls and new appointment requests, you’ll
          want to invest in a little help from Ring Savvy’s virtual receptionist
          team. Our 24/7 service will make sure your business is always able to
          capture the new customer over the phone, and never becomes overwhelmed
          by sloppy scheduling.
        </p>
        <h2>Ring Savvy can book appointments on your behalf</h2>
        <p>
          We know a large portion of a pet grooming shop’s incoming calls will
          be from people looking to book an appointment for their dog or cat to
          be groomed, bathed, or trimmed. That’s why pet groomers should only
          consider investing in a phone answering service that actually trains
          its receptionists in appointment scheduling. If you fail to do this,
          you’re going to leave a large portion of your incoming callers
          frustrated and will likely send them looking elsewhere for their pet
          grooming needs.
        </p>
        <p>
          Appointment scheduling is an optional feature at Ring Savvy, but one
          that all pet grooming companies will want to take advantage of. With
          this feature turned on, our highly trained virtual receptionists will
          be given the ability to book appointments directly into your work
          calendar. Our receptionists have booked hundreds, and in some cases
          thousands of new appointments before, and can be trusted to always be
          accurate when entering in new appointment information. Their efforts
          will save your from having to spend hours on the phone calling back
          customers and booking appointments yourself.
        </p>
        <p>
          Ring Savvy utilizes a third party software, that can integrate with
          whatever calendaring software your business is currently using, while
          keeping your other calendar appointments completely confidential. Our
          receptionists will only book new appointments in time slots that you
          predetermine to be available, and will always send you a text and/or
          email message when a new appointment has been booked.
        </p>
        <h2>Personalized phone answering for your business</h2>
        <p>
          For those worried that using virtual receptionists may make their
          grooming shop come off as a bit impersonal, you should know that Ring
          Savvy’s service is 100% customizable. Once you begin using Ring Savvy,
          you’ll get the chance to personalize the way we greet your customers,
          the way we go about transferring over certain calls to you and your
          staff, and the new customer intake questions we ask your potential
          customers.
        </p>
        <p>
          Our receptionists will also be able to answer any frequently asked
          questions your business receives. For example, we’ll be able to inform
          customers on how long a dog’s bath typically takes or what additional
          grooming services your shop is able to provide. When beginning your
          relationship with Ring Savvy, you’ll just need to share with us the
          answers to some of your business’ top FAQs, and we’ll make sure our
          receptionists always have that information on hand and ready to share.
        </p>
        <p>
          With our team taking over a large portion of your call handling and
          new customer intake responsibilities, you’ll have more to devote to
          running your business and giving the animals you groom the top quality
          care they deserve.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
