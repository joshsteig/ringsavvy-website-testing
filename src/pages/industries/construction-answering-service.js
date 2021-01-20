import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function ConstructionService({ location }) {
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
          Construction Answering Service | Answering Service for Construction
        </title>
        <meta
          name='description'
          content='Construction Answering Service | Answering Service For Construction Companies | Sophisticated Dispatching Protocols Keep You Organized! Learn More Here.'
        />
      </Helmet>
      <Hero />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <p>
          When you’re at a work site, you need to give your full attention to
          the task at hand, and can’t afford to be frequently interrupted by
          incoming phone calls. Being distracted in a construction or
          contracting environment can mean a structure not being built correctly
          or even someone getting hurt. Unfortunately for those running
          construction and contracting businesses, any phone call can present
          significant monetary opportunity, and ignoring calls is hard to do.
        </p>
        <p>
          If you’re tired of incoming calls disrupting the flow of your work
          days, it’s time to invest in some professional phone answering
          assistance. Ring Savvy’s team of virtual receptionists will provide
          your company with 24/7 phone coverage, and allow construction workers
          and contractors to go about their work days without having to
          constantly step away or pause work to answer calls.
        </p>
        <h2>With Ring Savvy you don’t have to stress over missed calls</h2>
        <p>
          At Ring Savvy we remain fully staffed with highly trained virtual
          receptionists at all hours of the day and night. This guarantees that
          we always have experienced receptionists ready to field calls on
          behalf of all the businesses we serve. As a Ring Savvy customer, you
          can feel comfortable not picking up a call, because you’ll have the
          confidence of knowing one of our highly competent receptionists will
          be there to speak to the caller on your behalf. We’ll give your
          callers the live attention they are looking for, and make sure they
          never have to deal with the frustration of being sent to your
          voicemail machine.
        </p>
        <h2>Check new messages during your downtime</h2>
        <p>
          When breaks arise during your work day, you’ll be able to catch up on
          all the calls you missed right from your mobile device. Whenever we
          field a call on your behalf, we’ll record a message detailing what the
          call was about, and send that message to you via SMS text and/or
          email. You’ll be able to catch up on work messages during your
          downtime with the same level of efficiency you review personal texts
          and emails.
        </p>
        <p>
          When potential new customers call in, our receptionist will take them
          through the new customer intake process. We’ll gather your prospects
          personal information, and ask your callers specific questions of your
          choosing. For example, if you want us to ask all your new callers if
          they are looking to hire a crew for a “residential or commercial job”,
          we absolutely can. All of the information we gather will be sent to
          you in message form at the conclusion of the call, and if our intake
          indicates an exciting new opportunity for your company, you can call
          the customer back right away.
        </p>
        <p>
          When an existing customer or associate calls in, our receptionist will
          take an accurate and detailed message from them. With the ability to
          view new messages right from your phone you can determine whether the
          person who called in requires an immediate call back, can be
          accommodated with a simple text, or can be dealt with at a later time.
        </p>
        <p>
          Our advanced message taking services can also be useful for
          construction companies looking for help communicating with Spanish
          speaking callers. Our receptionist team always has bilingual
          receptionists ready to field calls on your behalf, and can perform new
          customer intakes or record customer messages from a Spanish speaking
          individual, before sending that messages to your mobile phone fully
          translated. Ring Savvy’s team is willing to do whatever it taxes to
          make sure construction workers and contractors never miss the chance
          to win new business, and can always be trusted to do the job right the
          first time.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
