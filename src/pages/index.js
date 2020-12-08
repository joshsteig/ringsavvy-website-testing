import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Hero from '../components/hero';
import Tabs from '../components/tabs';
import MarketingCompaign from '../components/marketingCampaign';
import Blogs from '../components/blogs';
import Testimonials from '../components/testimonials';

export default function RootIndex(props) {
  const { location,  data } = props;
  const featuresData = [
    [
      {
        title: 'We’re always live, always professional',
        description:
          '<p>You never know when a potentially significant customer will contact your business, and with our help, you can increase your lead capturing opportunities from 40 hours every week, to 168 hours!<span>And no matter what hour of the day a call comes in, the quality of our service remains the same.</span></p>',
        ctaText: 'Learn more',
      },
      {
        title: 'New customer intake tailored towards your business',
        description:
          '<p>Our virtual receptionists are experts when it comes to gathering new customer information. Ring Savvy staff members take the time to make sure all the information we gather from a first time caller to your business is correct, and will never rush through a call.<span>Our receptionists are able to come off as a seamless extension of your firm, as they utilize intake scripts customized towards your business’ needs.</span></p>',
        ctaText: 'Learn more',
      },
      {
        title: 'Connect with Spanish speaking customers',
        description:
          '<p>The market for your business’ services may be bigger than you realize! With the help of Ring Savvy’s bilingual receptionist staff, you’ll have no problem engaging with Spanish speaking consumers in your area.<span>This could end up giving your business an incredible edge over competitors.</span></p>',
        ctaText: 'Learn more',
      },
      {
        title: 'Stay engaged with customers while on the go',
        description:
          '<p>Not only will our virtual receptionist team cover your phones while you’re away from the office, but we’ll pass along all customer messages to your mobile device via text and/or email message.<span>This will provide you with incredible peace of mind, as you’ll always know when new customer opportunities arise.</span></p>',
        ctaText: 'Learn more',
      },
    ],
    [
      {
        title: 'Personalized call forwarding setup',
        description:
          '<p>You’ll get on the phone with our staff, and setup your call handling and forwarding preferences.</p>',
        ctaText: 'Learn more',
      },
      {
        title: 'New customer intake process',
        description:
          '<p>Our receptionist will act as a representative of your business, letting your caller know who they have called, and taking all first time callers to your business through a new customer intake process.</p>',
        ctaText: 'Learn more',
      },
      {
        title: 'Custom message taking protocols',
        description:
          '<p>After the intake process is complete, our receptionist will reach out to you to see if you would like to be transferred in on the call. If you are unavailable to do so, our receptionist will take a message from your prospective or current customer, and send that message over to you via text and/or email at the conclusion of the call.</p>',
        ctaText: 'Learn more',
      },
    ],
  ];

  const leadData = [
    {
      title: 'Why businesses trust Ring Savvy for their lead capturing needs',
      description:
        'Our virtual receptionist team is U.S. based, and we’ll never outsource your calls. All our staff is local to our call centerlocated in Long Island, New York. We know that your business isn’t just concerned about answering calls quickly, but also providing customers with a pleasant and enjoyable phone call experience. Ring Savvy takes the time to get to know and carefully train all of our virtual receptionists. We can say with confidence that we’re providing the very best people to engage with your customers.',
    },
    {
      title: 'How does our live answering service work?',
      description:
        'Ring Savvy will serve as the ultimate lead capturing safety net for your business. Never again will you miss out on a potential customer, because you failed to provide them with a live voice or offered subpar phone answering assistance. Our virtual receptionist team will always get to your calls well before the beep of your voicemail machine. Here’s how we keep new leads from passing your company by:',
    },
  ];

  return (
    <Layout location={location}>
      <Helmet>
        <title>
          Best Quality 24/7 Live Answering Service and Virtual Receptionists
        </title>
        <meta
          name='description'
          content='Ring Savvy | 24/7 Live Answering Service | Serving All Industries as a Quality Extension of Your Business | Try For Free! Fully Bilingual.'
        />
      </Helmet>

      <Hero />
      
      <Tabs leadData={leadData[0]}  featuresData={featuresData[0]} />
      <Testimonials />
      <MarketingCompaign />
      <Tabs leadData={leadData[1]} featuresData={featuresData[1]} />
      <Blogs Blogs={data?.allContentfulPost?.edges}/>
    </Layout>
  );
}

export const pageQuery = graphql`
  query HomeQuery{
    allContentfulPost(
      sort: { fields: [publishDate], order: DESC }    
      limit: 3
    ) {
      edges {
        node {
          title
          slug
          featuredImage {
            fluid(maxWidth: 470, maxHeight: 230) {
              ...GatsbyContentfulFluid
            }
          }          
        }
      }
    }
  }
`;
