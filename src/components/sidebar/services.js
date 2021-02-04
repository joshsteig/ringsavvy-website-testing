import React from 'react';
import * as Styled from './style';

const Services = () => {
  const services = [
    {
      name: '24/7 Live Answering',
      url: '/services/24-7-live-answering-service/',
    },
    {
      name: 'Bilingual Answering',
      url: '/services/bilingual-answering-service/',
    },
    { name: 'New Customer Intake', url: '/services/new-customer-intake/' },
    {
      name: 'Live Call Transferring',
      url: '/services/live-call-transferring/',
    },
    {
      name: 'Advanced Call Screening',
      url: '/services/advanced-call-screening/',
    },
    {
      name: 'Overflow Call Handling',
      url: '/services/overflow-call-handling/',
    },
    { name: 'Message Taking', url: '/services/message-taking/' },
    {
      name: 'Appointment Scheduling',
      url: '/services/appointment-scheduling/',
    },
    { name: '100% Customizable', url: '/services/customizable/' },
  ];

  return (
    <Styled.Section>
      <Styled.Title>All our services</Styled.Title>
      <Styled.List>
        {services.map(({ name, url }) => (
          <Styled.serviceLink key={url}>
            <a href={url}>{name}</a>
          </Styled.serviceLink>
        ))}
      </Styled.List>
    </Styled.Section>
  );
};

export default Services;
