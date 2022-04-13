import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

//TODO: Refactor - break out menu arrays into new file
const services = [
  {
    name: 'Services',
    path: '/services',
  },
  {
    name: 'New York Answering Service',
    path: '/coverage/new-york-answering-service',
  },
  {
    name: 'Live Answering Service',
    path: '/live-answering-service',
  },
  {
    name: 'Virtual Receptionist',
    path: '/virtual-receptionist',
  },
  {
    name: 'Long Island Answering Service',
    path: '/coverage/long-island-answering-service',
  },
];

const about = [
  {
    name: 'Our Story',
    path: '/our-story',
  },
  {
    name: 'Authors',
    path: '/authors',
  },
];

const resources = [
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'Videos',
    path: '/videos',
  },
  {
    name: 'Tutorials',
    path: '/tutorials',
  },
  {
    name: 'Scholarships',
    path: '/scholarships',
  },
];

const industries = [
  {
    name: 'HVAC',
    path: '/industries/hvac-answering-service',
  },
  {
    name: 'Dental',
    path: '/industries/dental-answering-service',
  },
  {
    name: 'Pet Grooming',
    path: '/industries/pet-grooming-answering-service',
  },
  {
    name: 'Landscaping',
    path: '/industries/landscaping-answering-service',
  },
  {
    name: 'Construction',
    path: '/industries/construction-answering-service',
  },
  {
    name: 'Accounting',
    path: '/industries/accounting-answering-service',
  },
  {
    name: 'Automotive',
    path: '/industries/automotive-answering-service',
  },
  {
    name: 'Finance/Mortgage',
    path: '/industries/finance-answering-service',
  },
  {
    name: 'IT',
    path: '/industries/information-technology-answering-service',
  },
  {
    name: 'Real Estate',
    path: '/industries/real-estate-answering-service',
  },
  {
    name: 'Plumbing',
    path: '/industries/plumbing-answering-service',
  },
  {
    name: 'Heating/Oil',
    path: '/industries/heating-oil-answering-service',
  },
  {
    name: 'Doors',
    path: '/industries/commercial-residential-doors',
  },
  {
    name: 'Cleaning',
    path: '/industries/cleaning-answering-service',
  },
  {
    name: 'Electrician',
    path: '/industries/electrician-answering-service',
  },
];

const support = [
  {
    name: 'Privacy Policy',
    path: '/privacy-policy',
  },
  {
    name: 'Terms Of Service',
    path: '/terms-of-service',
  },
  {
    name: 'Employment Opportunities',
    path: '/employment-opportunities',
  },
];

const UnstyledList = styled.ul`
  font-size: ${({ theme }) => theme.global.fontSizes.base};
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0 0 0.75em;
  }
`;

const Title = styled.h5`
  font-size: ${({ theme }) => theme.global.fontSizes.base};
  margin: 0 0 0.75em;
`;

export const ServiceMenu = () => (
  <UnstyledList>
    <li>
      <Title>Our Service</Title>
      <UnstyledList>
        {services.map(({ name, path }, index) => (
          <li key={index}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </UnstyledList>
    </li>
  </UnstyledList>
);

export const AboutMenu = () => (
  <UnstyledList>
    <li>
      <Title>About Us</Title>
      <UnstyledList>
        {about.map(({ name, path }, index) => (
          <li key={index}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </UnstyledList>
    </li>
  </UnstyledList>
);

export const ResourcesMenu = () => (
  <UnstyledList>
    <li>
      <Title>Resources</Title>
      <UnstyledList>
        {resources.map(({ name, path }, index) => (
          <li key={index}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </UnstyledList>
    </li>
  </UnstyledList>
);

export const IndustriesMenu = () => (
  <UnstyledList>
    <li>
      <Title>Industries</Title>
      <UnstyledList>
        {industries.map(({ name, path }, index) => (
          <li key={index}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </UnstyledList>
    </li>
  </UnstyledList>
);

export const SupportMenu = () => (
  <UnstyledList>
    <li>
      <Title>Support</Title>
      <UnstyledList>
        {support.map(({ name, path }, index) => (
          <li key={index}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </UnstyledList>
    </li>
  </UnstyledList>
);
