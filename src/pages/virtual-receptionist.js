import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import Hero from '../components/hero';
import ContentSection from '../components/contentSection';
import Testimonials from '../components/testimonials';
import FaqAccordion from '../components/faqAccordion';
import EmailSection from '../components/emailSection';
import ValueGrid from '../components/valueGrid';
import CardGrid from '../components/cardGrid';

export default function VirtualReceptionist({ location }) {
  const contentData = [
    {
      id: 1,
      heading: 'What can a Virtual Receptionist do for my business?',
      content:
        'Our virtual receptionist staff is made up of real human beings, who will make your customers feel cared for on the phone, and be able to easily adapt to your business’ specific phone answering requests. Automated technology is no doubt exciting, but when it comes to answering phone calls on behalf of your customers, relying on live humans is still by far the best way to effectively capture new leads.',
    },
    {
      id: 2,
      heading: 'Where do Virtual Receptionists work from?',
      content: [
        'With other phone answering services out there, the answer to the above question is often quite unclear. Your calls could be going through a little shack by the highway in Massachusetts or could be getting outsourced overseas. When using Ring Savvy, there is absolutely no mystery as to who is answering calls on behalf of your business. All of our virtual receptionists work out of one central call center location in Long Island, New York.',

        'We never outsource calls, and every one of our virtual receptionist team members has been carefully vetted and trained by our management staff. Because Ring Savvy virtual receptionists all work out of one location, we are able to ensure that they receive the best possible phone training. Overseeing the performance of our receptionists on the phone is also much easier, allowing us to quickly identify and fix problem areas, and always pass along the best quality phone answering service to business owners.',
      ],
    },
    {
      id: 3,
      heading: 'Why are Ring Savvy’s Virtual Receptionists superior?',
      content:
        'Your business is unique and so are your phone answering needs. That’s why at Ring Savvy, we train our virtual receptionists to do so much more than just answer your phones.',
    },
    {
      id: 4,
      heading: 'Can a Virtual Receptionist replace my in-office receptionist?',
      content: [
        'Ring Savvy virtual receptionists can be used by businesses in a variety of ways. For many companies, our virtual receptionist team will be the only phone answering staff needed. Our receptionists can handle just about all of the responsibilities an in-house receptionist normally would, and do so at a fraction of the cost. Remember, our virtual receptionists already come to you fully trained, and you won’t have to pay them health benefits or provide them with paid time off.',

        'Some businesses will find that their in-house receptionist is just too valuable to go without, and for those companies, Ring Savvy is still a great option. Even if your current receptionist is great at answering business calls during normal working hours, you’ll still want our team available for answering calls during after hours, weekends, and holidays. Having our virtual receptionist team available will also take some pressure off your current phone answering staff.',
      ],
    },
    {
      id: 5,
      heading: 'How much does using a Virtual Receptionist cost?',
      content:
        'That will depend on how many minutes our virtual receptionists spend talking on the phone with your customers. Ring Savvy is a pay as you go service, meaning you only pay for the minutes you actually use each month. The monthly minimum for our service is $150, which will get you 50 minutes of live phone answering coverage.',
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
        <title>
          Virtual Receptionist | Ring Savvy | 24/7 Live Virtual Receptionists
        </title>
        <meta
          name='description'
          content='Virtual Receptionist | Our Team of 100+ Real Human Beings Will Answer Your Calls 24 Hours a Day. Try Us Free For 7 Days, No Credit Card Down!'
        />
      </Helmet>
      <Hero />
      <ValueGrid
        contentData={contentData.find((data) => data.id === 1)}
        gridData={gridData}
      />
      <ContentSection contentData={contentData.find((data) => data.id === 2)} />
      <Testimonials />
      <CardGrid
        contentData={contentData.find((data) => data.id === 3)}
        cardData={cardData}
      />
      <ContentSection contentData={contentData.find((data) => data.id === 4)} />
      <EmailSection />
      <FaqAccordion contentData={contentData.find((data) => data.id === 5)} />
    </Layout>
  );
}
