import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';
import Testimonials from '../../components/testimonials';
import FaqAccordion from '../../components/faqAccordion';

export default function FinanceService({ location }) {
  const heroData = {
    heading: 'Finance/Mortgage Answering Service',
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
        <title>Finance/Mortgage Answering Service | Ring Savvy</title>
        <meta
          name='description'
          content="Finance/Mortgage Answering Service | Ring Savvy | We Provide the Highest Quality Virtual Receptionist Services Available | Don't Settle For Less."
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent hasSidebar learnMoreData={learnMoreData}>
        <p>
          When people have a lot of money on the line, it is only natural for
          them to worry. And when people worry, they tend to ask a lot of
          questions. If you’re in the finance or mortgage business, and are
          responsible for either handling people’s money or helping people make
          significant purchases, you better make yourself available to answer
          questions 24/7. If you don’t, and let a large portion of your calls go
          to voicemail, you can expect customers to turn on you very quickly.
        </p>
        <p>
          Fortunately providing 24/7 live phone coverage doesn’t have to be
          difficult. All you have to do is sign up with Ring Savvy.
        </p>
        <h2>Overflow call handling will allow you to take a breath</h2>
        <p>
          At Ring Savvy, our call center remains active 24 hours a day, seven
          days a week, 365 days a year. Inside of that call center is a team of
          trained virtual receptionists that make sure that not a single call
          received by any business we serve ends up going to voicemail. Ring
          Savvy’s team can guarantee that all of your company’s calls will get
          answered by a live trained professional, no matter how many incoming
          calls your recieve, and no matter what time a customer calls into your
          business. Always providing your customers with a live person to speak
          with shows that your company cares about their important life matters
          as much as they do, and can be trusted to guide them through making
          important life decisions. Not to mention, new opportunities can arise
          fast in the finance and mortgage industry, and you always want to have
          a receptionist ready to help your customers take action.
        </p>
        <p>
          Of course just answering the phone by itself isn’t enough to calm the
          nerves of those worried about their financial futures. You need
          competent and knowledgeable people on the other line, and with Ring
          Savvy, that’s just what you get. All of our virtual receptionists have
          gone through months of extensive training on proper phone etiquette
          and handling various call handling situations. Our receptionists can
          always be trusted to make the right decision when problems or urgent
          situations arise, and help you get in touch with your customers in a
          hurry.
        </p>
        <h4>What options do you have with live call transferring?</h4>
        <p>
          When we say that all of Ring Savvy’s services are 100 percent
          customizable, we truly mean all of our services.
        </p>
        <ul>
          <li>
            Our receptionist can find out the caller’s name and reason for
            calling, and transfer the call over to a designated direct line of
            your choosing. When signing up with Ring Savvy, you’ll tell us which
            situations should qualify for a live transfer, and what times of day
            we should attempt to transfer calls over to your designated direct
            line. If you’d like, we can attempt to contact more than one person.
            Live call transfers will be greatly appreciated by your customers,
            as it will give you the ability to answer their questions in real
            time, rather than keeping them in suspense for hours.
          </li>
          <li>
            Our receptionist can find out the caller’s name and reason for
            calling, and transcribe all their information in message form. At
            the conclusion of the call, your customer’s message will be sent to
            you via text and/or email. With the ability to check new messages
            right from your mobile device, you can always be aware when
            customers are trying to reach out to you, and offer them an
            appropriate response time.
          </li>
        </ul>
        <p>
          Ring Savvy is a highly flexible service, and you can change the way we
          handle and direct your customers calls at any time.
        </p>
        <h2>We’ll help capture more of your new leads</h2>
        <p>
          When a person calls into your business for the first time, and you’re
          unavailable to speak to the customer yourself, our receptionists will
          make sure your business still makes a great first impression. Using
          information provided by you, our receptionist will have the ability to
          answer any common FAQs callers might have about your business. Never
          will your callers hear “I don’t know” when asking a basic and easy to
          answer question about your company.
        </p>
        <p>
          While prospective customers are getting informed about what your
          business has to offer, our receptionists will be busy gathering
          information about them. Our new customer intake process can be tweaked
          to include questions relevant to your specific finance or mortgage
          business, and help ensure that you get the information necessary to
          evaluate and move forward with potential customers. All new intake
          information will be sent to you via text and/or email message at the
          conclusion of the call, allowing you to take action right away.
        </p>
      </SecondaryContent>
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 1)} />
    </Layout>
  );
}
