import React, { useState } from 'react';
import Logo from '../logo';
import { Wrapper } from '../wrapper';
import * as Styled from './style';

//TODO: add to menus array component when that is refactored
const links = [
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
    name: 'FAQs',
    path: '/faqs',
  },
  {
    name: 'Pricing',
    path: '/pricing',
  },
];

const Navigation = () => {
  const [isToggled, setToggle] = useState(false);

  return (
    <Wrapper>
      <Styled.Navigation>
        <Styled.LogoLink to='/'>
          <Logo />
        </Styled.LogoLink>

        <Styled.ToggleButton onClick={() => setToggle(!isToggled)}>
          <span>&#9776;</span> Menu
        </Styled.ToggleButton>

        <Styled.NavigationList active={isToggled}>
          {links.map(({ name, path }, i) => (
            <Styled.ListItem key={i}>
              <Styled.NavigationLink to={path}>{name}</Styled.NavigationLink>
            </Styled.ListItem>
          ))}

          <Styled.ListItem>
            <Styled.NavigationCTA $transparent $whiteBorder to='/'>
              Try for Free
            </Styled.NavigationCTA>
          </Styled.ListItem>
        </Styled.NavigationList>
      </Styled.Navigation>
    </Wrapper>
  );
};

export default Navigation;
