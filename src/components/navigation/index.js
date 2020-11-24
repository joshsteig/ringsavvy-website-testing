import React from 'react';
import { Wrapper } from '../wrapper/style';
import Logo from '../logo/index';
import {
  LogoLink,
  NavigationList,
  ListItem,
  NavigationLink,
  NavigationCTA,
} from './style';

export default () => (
  <nav role='navigation' aria-label='Main Navigation'>
    <Wrapper>
      <NavigationList>
        <LogoLink to='/'>
          <Logo />
        </LogoLink>
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
    </Wrapper>
  </nav>
);
