import React from 'react';
import { Button } from '../button/style';
import Logo from '../logo';
import { Wrapper } from '../wrapper/style';
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
  <Wrapper>
    <NavigationWrapper>
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
            <Button transparent whiteBorder>
              Try for Free
            </Button>
          </ListItem>
        </NavigationList>
      </nav>
    </NavigationWrapper>
  </Wrapper>
);
