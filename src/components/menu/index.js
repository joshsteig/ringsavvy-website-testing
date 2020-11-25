import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const UnstyledList = styled.ul`
  font-size: ${(props) => props.theme.global.fontSizes.base};
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0 0 0.75em;
  }
`;

const Title = styled.h5`
  font-size: ${(props) => props.theme.global.fontSizes.base};
  margin: 0 0 0.75em;
`;

export const ServiceMenu = () => (
  <UnstyledList>
    <li>
      <Title>Our Service</Title>
      <UnstyledList>
        <li>
          <Link to='/'>Services</Link>
        </li>
        <li>
          <Link to='/'>New York Answering Service</Link>
        </li>
        <li>
          <Link to='/'>Live Answering Service</Link>
        </li>
        <li>
          <Link to='/'>Virtual Receptionist</Link>
        </li>
        <li>
          <Link to='/'>Long Island Answering Service</Link>
        </li>
      </UnstyledList>
    </li>
  </UnstyledList>
);

export const AboutMenu = () => (
  <UnstyledList>
    <li>
      <Title>About Us</Title>
      <UnstyledList>
        <li>
          <Link to='/'>Our Story</Link>
        </li>
        <li>
          <Link to='/'>Authors</Link>
        </li>
      </UnstyledList>
    </li>
  </UnstyledList>
);

export const ResourcesMenu = () => (
  <UnstyledList>
    <li>
      <Title>Resources</Title>
      <UnstyledList>
        <li>
          <Link to='/'>Blog</Link>
        </li>
        <li>
          <Link to='/'>Videos</Link>
        </li>
        <li>
          <Link to='/'>Tutorials</Link>
        </li>
        <li>
          <Link to='/'>Scholarships</Link>
        </li>
      </UnstyledList>
    </li>
  </UnstyledList>
);

export const IndustriesMenu = () => (
  <UnstyledList>
    <li>
      <Title>Industries</Title>
      <UnstyledList>
        <li>
          <Link to='/'>HVAC</Link>
        </li>
        <li>
          <Link to='/'>Dental</Link>
        </li>
        <li>
          <Link to='/'>Pet Grooming</Link>
        </li>
        <li>
          <Link to='/'>Landscaping</Link>
        </li>
        <li>
          <Link to='/'>Construction</Link>
        </li>
        <li>
          <Link to='/'>Accounting</Link>
        </li>
        <li>
          <Link to='/'>Automotive</Link>
        </li>
        <li>
          <Link to='/'>Finance/Mortgage</Link>
        </li>
        <li>
          <Link to='/'>IT</Link>
        </li>
        <li>
          <Link to='/'>Real Estate</Link>
        </li>
        <li>
          <Link to='/'>Plumbing</Link>
        </li>
        <li>
          <Link to='/'>Heating/Oil</Link>
        </li>
        <li>
          <Link to='/'>Doors</Link>
        </li>
        <li>
          <Link to='/'>Cleaning</Link>
        </li>
      </UnstyledList>
    </li>
  </UnstyledList>
);

export const SupportMenu = () => (
  <UnstyledList>
    <li>
      <Title>About Us</Title>
      <UnstyledList>
        <li>
          <Link to='/'>Contact us</Link>
        </li>
        <li>
          <Link to='/'>Submit a ticket</Link>
        </li>
        <li>
          <Link to='/'>Careers</Link>
        </li>
      </UnstyledList>
    </li>
  </UnstyledList>
);
