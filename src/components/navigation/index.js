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

export default () => (
  <header>
    <NavigationWrapper>
      <LogoLink to='/'>
        <Logo />
      </LogoLink>
      <nav role='navigation' aria-label='Main Navigation'>
        <NavigationList>
          <ListItem>
            <NavigationLink to='/'>Home</NavigationLink>
          </ListItem>
          <ListItem>
            <NavigationLink to='/blog/'>Blog</NavigationLink>
          </ListItem>
          <ListItem>
            <NavigationCTA to='/'>Get Started</NavigationCTA>
          </ListItem>
        </NavigationList>
      </nav>
    </NavigationWrapper>
  </header>
);
