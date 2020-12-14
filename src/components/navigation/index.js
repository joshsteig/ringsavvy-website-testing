import React, { useState } from 'react';
import Logo from '../logo';
import { Wrapper } from '../wrapper';
import {
  Navigation,
  LogoLink,
  NavigationList,
  ListItem,
  NavigationLink,
  NavigationCTA,
  ToggleButton,
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

export default () => {
  const [isToggle, setToggle] = useState(false);

  return (
    <Wrapper>
      <Navigation>
        <LogoLink to='/'>
          <Logo />
        </LogoLink>
        <ToggleButton onClick={() => setToggle((prev) => !prev)}>
          <span>&#9776;</span> Menu
        </ToggleButton>
        <NavigationList active={isToggle}>
          {Links.map(({ name, path }, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <ListItem key={i}>
              <NavigationLink to={path}>{name}</NavigationLink>
            </ListItem>
          ))}
          <ListItem>
            <NavigationCTA $transparent $whiteBorder to='/'>
              Try for Free
            </NavigationCTA>
          </ListItem>
        </NavigationList>
      </Navigation>
    </Wrapper>
  );
};
