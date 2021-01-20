import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
import Hero from '../components/hero';
import Tabs from '../components/tabs';
import ContentSection from '../components/contentSection';
import FaqAccordion from '../components/faqAccordion';
import EmailSection from '../components/emailSection';
import ValueGrid from '../components/valueGrid';
import { FlexRow } from '../components/globals';

// TODO: Look into bug: Green tab turns white when 3 column grid link is hovered over
export default function HowItWorks({ location }) {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "how-it-works-info.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const heroData = {
    heading: 'How it works',
  };

  const contentData = [
    {
      id: 1,
      heading: 'How we’ll set up your service',
      content: [
        'Before your free trial officially begins, we’ll work with you and your phone provider to set up call forwarding protocols for your phone systems.',

        'This typically takes a short period of time, and requires very little effort on your end. Just let our Savvy representative know what you’d like from our service, and our top notch support team will take care of the rest.',
      ],
    },
    {
      id: 2,
      heading: 'How we’ll forward your calls',
      content: [
        'One of the most important things you’ll do with your Savvy representative is decide on a preferred call forwarding method for your business.',

        'Having one of these methods in place guarantees that all calls to your company get answered by a live voice, whether it’s from your office or our service. Keep in mind, that you can change your preferred call forwarding method at any time.',
      ],
    },
    {
      id: 3,
      heading: 'How we’ll engage with your customers',
      content: [
        'Worried about how our answering service will greet your customers. You’ll be glad to know that one of the first things we do when setting up your account with Ring Savvy is establish a customized greeting for our receptionists to say to all of your business’ callers.',

        'This greeting will always be polite, personalized, and help get conversations with new customers off on the right foot.',
      ],
    },
    {
      id: 4,
      heading: 'How our 7 day free trial works',
      content: [
        'Once our service is setup with your phone systems, our virtual receptionist team can immediately begin answering calls on behalf of your business.',

        'During the trial period, you’ll get 24/7/365 coverage from our receptionist team, as well as access to additional features, such as live call transferring and new customer intake.',
      ],
    },
  ];

  const gridData = [
    {
      heading: 'State of the art call forwarding',
      content:
        'Choose when you’d like to answer calls for your business, and when you’d like calls to be automatically forwarded to our team.',
      ctaLink: '/services/overflow-call-handling/',
    },
    {
      heading: 'Customizable to fit your business',
      content:
        'Personalize everything from the questions we ask first-time callers to your company, to the way we go about transferring your calls.',
      ctaLink: '/services/overflow-call-handling/',
    },
    {
      heading: 'Always live, 24/7/365',
      content:
        'Our call center is always up and running, and fully staffed with both English and Spanish speaking receptionists. We don’t even take holidays off.',
      ctaLink: '/services/overflow-call-handling/',
    },
  ];

  const tabData = [
    {
      heading: 'Straight call forwarding',
      content: [
        'Under this option, Ring Savvy customers are able to manually forward and unforward their calls to our virtual receptionist team. You’ll get to decide when you and your staff should be handling calls, and when calls should be directly sent to our service.',

        'This is the simplest type of call forwarding we offer, and for many business owners will be the best method.',
      ],
      ctaText: 'Get started',
      ctaLink: '/sign-up/',
    },
    {
      heading: 'Rollover call forwarding',
      content: [
        'This method of call forwarding, allows business owners to forward calls to Ring Savvy on a conditional basis.',

        'Conditions can include: Our service picking up after a certain number of rings, picking up when there are no other lines available for a call to ring on or picking up when your cell phone is without service.',
      ],
      ctaText: 'Get started',
      ctaLink: '/sign-up/',
    },
    {
      heading: 'Time of day call forwarding',
      content: [
        'This type of call forwarding is exactly what it sounds like. You tell us which hours of the day you’d like to answer business calls yourself (for example, during normal business hours), and let us know which hours you’d like our service to take over.',

        'Make sure new leads that come in during the overnight and weekends never pass you by.',
      ],
      ctaText: 'Get started',
      ctaLink: '/sign-up/',
    },
    {
      heading: 'Full time call forwarding',
      content: [
        'Sometimes you just need a complete break from answering the phones and we can accommodate. Turn on this type of call forwarding, and we’ll answer every single one of your calls on the first ring.',

        'This is a great option to have during extra busy work weeks, or when it’s time to go on vacation.',
      ],
      ctaText: 'Get started',
      ctaLink: '/sign-up/',
    },
  ];

  return (
    <Layout location={location}>
      <Helmet>
        <title>How It Works - Ring Savvy, Inc. Virtual Receptionists</title>
        <meta
          name='description'
          content='How It Works | Ring Savvy | 24/7 Live Virtual Receptionist Answer Every Call You Miss. Learn More Here and Call Today For a Free Trial!'
        />
      </Helmet>
      <Hero heroData={heroData} />
      {/* TODO: create feature grid */}
      <ValueGrid
        horizontal
        contentData={contentData.find((data) => data.id === 1)}
        gridData={gridData}
      />
      <Tabs
        contentData={contentData.find((data) => data.id === 2)}
        tabData={tabData}
        horizontal
      />
      <EmailSection />
      <ContentSection
        horizontal
        contentData={contentData.find((data) => data.id === 3)}
      >
        {/* TODO: Why is this not displaying? */}
        <FlexRow center>
          <Img fluid={data.file.childImageSharp.fluid} />
        </FlexRow>
      </ContentSection>
      <FaqAccordion
        horizontal
        contentData={contentData.find((data) => data.id === 4)}
      />
    </Layout>
  );
}
