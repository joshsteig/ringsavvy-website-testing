import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function BilingualVirtualAnsweringService({ location }) {
  const heroData = {
    heading: 'Bilingual Virtual Receptionists',
  };

  const contentData = [
    {
      id: 1,
      heading: 'Getting started with Ring Savvy’s bilingual answering service',
      content:
        'Getting started is easy! We’ll work with you and your phone provider to set up your service. This typically takes a short period of time, and requires very little effort on your end. Just let our Savvy representative know what you’d like from our service, and our top notch support team will take care of the rest.',
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
          Bilingual Virtual Receptionists | Our Receptionists Speak Spanish!
        </title>
        <meta
          name='description'
          content="Bilingual Virtual Receptionists | Ring Savvy | We Speak Spanish 24 Hours a Day, So Don't Worry About Missing a Call From a Spanish Speaking Caller."
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <h2>
          Ring Savvy is ready to help your business connect with more Spanish
          speaking customers.
        </h2>
        <p>
          We know a lot of business owners out there would love to advertise to
          the Spanish speaking individuals in their area, or wish they could
          accommodate a higher number of Spanish speaking customers, but are
          often unable to due to language barrier issues. Ring Savvy makes
          getting around these roadblocks simple, as we provide companies with a
          team of virtual receptionists that will not only help answer their
          calls 24/7/365, but are able to answer calls in both English and
          Spanish!
        </p>
        <h2>What makes our Bilingual Virtual Receptionists the best?</h2>
        <p>
          Some phone answering companies may hire a bilingual receptionist and
          immediately send them off to answer calls. This often does not end so
          well. At Ring Savvy, all of our new receptionist hires go through
          months of individual training, before being allowed to answer calls on
          behalf of real companies. We carefully school our virtual
          receptionists on answering calls for different types of businesses,
          phone etiquette, performing new customer intakes, and much more! We
          even have Spanish speaking management staff available to ensure that
          the training process for our Spanish speaking receptionists goes as
          smoothly as possible. The end result of all this training, is your
          business always coming across as impressive to Spanish speaking
          individuals on the phone.
        </p>
        <h2>Where are our Bilingual Virtual Receptionists located?</h2>
        <p>
          At Ring Savvy, we only hire employees that live local to our office
          buildings in Long Island, New York, and are able to work directly from
          our call center location. We have no interest in outsourcing calls, as
          we feel that in order to keep the quality of our service at its
          highest, it is crucial that we monitor our receptionists in person
          each day. Our hiring staff is always on the lookout for talented
          bilingual speakers to add to our receptionist team, so that we are
          able to ensure that we have Spanish speaking staff available to answer
          calls at all times.
        </p>
        <h2>
          Our Bilingual Virtual Receptionists can help your business do more!
        </h2>
        <p>
          Teaming up with Ring Savvy can open up countless new customer
          opportunities for your company. With the confidence that your business
          can communicate with Spanish speakers over the phone, you can begin
          advertising directly towards the Spanish speaking communities in your
          area. When a Spanish speaker calls into your business, simply transfer
          the calls over to us, and one of our Bilingual Virtual Receptionists
          will perform a new customer intake on the caller for you. Once their
          finished, you’ll receive a fully translated message with all the
          details from the call.
        </p>
        <p>
          Having your Spanish speaking new leads taken through a proper new
          customer intake process, and allowing them to do so in the language
          they are most comfortable engaging in, will dramatically increase your
          odds of converting them into a customer.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
