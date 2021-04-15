import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import ContentSection from '../../components/contentSection';
import Testimonials from '../../components/testimonials';
import CardGrid from '../../components/cardGrid';
import { StyledLink } from '../../components/button';

export default function WorkizLandingPage({ location }) {
  const heroData = {
    heading: 'Ring Savvy and Workiz make for a great team',
    subHeading:
      'If you’re already using Workiz’s business management platform, we’re guessing you’re a pretty savvy business owner. Now it’s time to make another smart decision, and get started with Ring Savvy, the #1 phone answering service for field service companies.',
    primaryCtaLink: '/sign-up/',
    primaryCtaText: 'Try free for 7 days',
  };

  const contentData = [
    {
      id: 1,
      heading: 'Why choose Ring Savvy for your lead capturing needs?',
      content: [
        'Today answering the phone live is an absolute necessity, as consumers have completely lost patience for being sent to voicemail. When calls get missed throughout the day, so do new customers. For field service company owners with endlessly busy schedules, this can be a huge problem.',

        'Fortunately, Ring Savvy’s highly trained virtual receptionist team is available to answer calls on behalf of your business 24/7. We’ll make your new leads feel welcome, take them through the customer intake process, and send you a message after the call ends with all of the information you need to get them started!',
      ],
    },
    {
      id: 2,
      heading: 'Our special offer for Workiz customers',
      content:
        'Sign up for a free trial of our phone answering service today, and enjoy your first 300 minutes free.',
    },
    {
      id: 3,
      heading: "Why are Ring Savvy's Virtual Receptionists superior?",
      content:
        'Your business is unique and so are your phone answering needs. That’s why at Ring Savvy, we train our virtual receptionists to do so much more than just answer your phones.',
    },
    {
      id: 4,
      heading: 'Get started with Ring Savvy today!',
      content: 'No contracts to sign and no credit card required.',
    },
  ];

  const cardData = [
    {
      heading: 'Always live, 24/7/365',
      content:
        'Our call center is always up and running, and fully staffed with both English and Spanish speaking receptionists. We don’t even take holidays off.',
      linkUrl: '/services/24-7-live-answering-service',
    },
    {
      heading: 'Industry leading message taking',
      content:
        'Get the most accurate and organized messages from our receptionists sent directly to your mobile device via text and/or email.',
      linkUrl: '/services/message-taking',
    },
    {
      heading: 'Customizable to fit your business',
      content:
        'Personalize everything from the questions we ask first-time callers to your company, to the way we go about transferring your calls.',
      linkUrl: '/services/customizable',
    },
    {
      heading: 'State of the art call forwarding',
      content:
        'Choose when you’d like to answer calls for your business, and when you’d like calls to be automatically forwarded to our team.',
      linkUrl: '/services/overflow-call-handling',
    },
  ];

  return (
    <Layout location={location}>
      <Helmet>
        <title>Workiz Partner Page - Ring Savvy Partners</title>
        <meta
          name='description'
          content='Workiz Customers Receive an Additional Benefit When They Sign Up for Ring Savvy. Check Out Our Offer and Try For Free Today!'
        />
      </Helmet>
      <Hero
        heading={heroData.heading}
        subHeading={heroData.subHeading}
        primaryCtaLink={heroData.primaryCtaLink}
        primaryCtaText={heroData.primaryCtaText}
      />
      <ContentSection
        horizontal
        contentData={contentData.find((data) => data.id === 1)}
      />
      <ContentSection
        hasBackground
        centered
        contentData={contentData.find((data) => data.id === 2)}
      >
        <StyledLink to='/sign-up/'>Get started today</StyledLink>
      </ContentSection>
      <Testimonials style={{ margin: '50px 0' }} />
      <CardGrid
        cardData={cardData}
        contentData={contentData.find((data) => data.id === 3)}
      />
      <ContentSection
        centered
        contentData={contentData.find((data) => data.id === 4)}
      >
        <StyledLink to='/sign-up/'>Sign up for 300 free minutes</StyledLink>
      </ContentSection>
    </Layout>
  );
}
