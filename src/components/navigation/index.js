import React from 'react';
import Logo from '../logo';
import {
  NavigationWrapper,
  LogoLink,
  NavigationList,
  ListItem,
  NavigationLink,
  NavigationCTA,
} from './style';

const Links = [
  {
    name: 'How It works',
    path: '/',
  },
  {
    name: 'Services',
    path: '/services',
  },
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: "FAQ's",
    path: '/faqs',
  },
  {
    name: 'Pricing',
    path: '/pricing',
  },
];

export default () => (
  <header className='flex items-center max-w-6xl mx-auto px-5 py-12 absolute left-0 right-0 z-10 text-white'>
    <LogoLink to='/'>
      <Logo />
    </LogoLink>
    <nav role='navigation' aria-label='Main Navigation'>
      <NavigationList>
        {Links.map(({ name, path }) => (
          <ListItem>
            <NavigationLink to={path}>{name}</NavigationLink>
          </ListItem>
        ))}
        <ListItem>
          <button className='border border-white rounded-full py-2 px-12 white-button font-bold'>
            Try for free
          </button>
        </ListItem>
      </NavigationList>
    </nav>
  </header>
);
