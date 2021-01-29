import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Hero from '../components/hero';
import ContentSection from '../components/contentSection';
import Testimonials from '../components/testimonials';
import FaqAccordion from '../components/faqAccordion';
import CardGrid from '../components/cardGrid';
import Brooke from '../assets/images/brooke-shatles.jpg';
import Rob from '../assets/images/rob-shatles.jpg';

export default function OurStoryIndex({ location }) {
  const heroData = {
    heading: 'Our Story- Ring Savvy',
  };

  const contentData = [
    {
      id: 1,
      heading: 'Growing a new business from the ground up isn’t easy',
      content: [
        'We know the daily challenges small business owners face all too well, because we’ve dealt with them ourselves. In 2013, Brooke and Rob Shatles launched a phone answering service in Long Island, New York, that would eventually become known as Ring Savvy.',

        'Our company started out quite small, and like many small business owners, we faced some early bumpy roads, and made our fair share of mistakes. But, through hard work, perseverance, and some very innovative thinking, we were eventually able to establish ourselves as one of the top phone answering services on the market.',
      ],
    },
    {
      id: 2,
      heading: 'What makes Ring Savvy different?',
      content: [
        'Brooke and Rob knew they faced stiff competition in the phone answering industry, and that Ring Savvy would have to provide much more than the average call center in order to be a success. With this in mind, the Shatles family decided it would have its business center around two key building blocks: 24/7/365 live phone answering and elite virtual receptionist service.',

        'In our company’s early years, Brooke and Rob made the decision to run their operation out of a single call center location, and only hire receptionists that lived nearby. Doing this allows Ring Savvy’s offices to remain fully staffed at all hours of the day and night, and always have enough receptionists on hand to make sure a single call isn’t missed. We never outsource calls, and always know exactly who is working our phone lines.',

        'Our receptionist training program has evolved into one of the country’s best, as all of our new hires are carefully schooled on proper phone etiquette, message taking, and performing the new customer intake process. This level of training ensures that the businesses we represent always come off as impressive on the phone, and always have the best possible chance to win over the new customer.',
      ],
    },
    {
      id: 3,
      heading: 'Ring Savvy today',
      content: [
        'The future is bright for Ring Savvy, as we continue to build relationships with businesses around the country, and have new updates and developments to our service around the corner. As we grow, we vow to never forget our roots, or the people who helped us during our early years. Keeping the quality of our service high will always remain a top priority, as will finding new ways to improve our business.',

        'Our receptionists will act as a representative of your business, letting your caller know who they have called, and taking all first time callers to your business through your personal new customer intake process.',
      ],
    },
  ];

  const employeeData = [
    {
      name: 'Brooke Shatles',
      title: 'CEO/Co-Founder',
      gravatarUrl: `${Brooke}`,
    },
    {
      name: 'Rob Shatles',
      title: 'President/Co-Founder',
      gravatarUrl: `${Rob}`,
    },
  ];

  return (
    <Layout location={location}>
      <Helmet>
        <title>Our Story - Ring Savvy - Learn More About Who We Are</title>
        <meta
          name='description'
          content='Our Story - Ring Savvy - We Come From Humble Beginnings. Read Here About How Ring Savvy Got Started and Where Our Vision Brought Us Today!'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <CardGrid
        centered={false}
        hasDiag={false}
        employeeData={employeeData}
        contentData={contentData.find((data) => data.id === 1)}
      />
      <ContentSection contentData={contentData.find((data) => data.id === 2)} />
      <Testimonials />
      <FaqAccordion contentData={contentData.find((data) => data.id === 3)} />
    </Layout>
  );
}
