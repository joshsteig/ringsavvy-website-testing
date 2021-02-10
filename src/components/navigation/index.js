import React, { useState } from 'react';
import Logo from '../logo';
import { Wrapper } from '../wrapper';
import * as Styled from './style';

//TODO: add to menus array component when that is refactored
const links = [
  {
    name: 'How It works',
    path: '/how-it-works',
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
    path: '/faq',
  },
  {
    name: 'Pricing',
    path: '/pricing',
  },
];

// TODO: Make better mobile menu design
const Navigation = ({ isReverse }) => {
  const [isToggled, setToggle] = useState(false);

  return (
    <Wrapper>
      <Styled.Navigation isReverse={isReverse}>
        <Styled.LogoLink to='/'>
          <Logo isReverse={isReverse} />
        </Styled.LogoLink>

        <Styled.ToggleButton onClick={() => setToggle(!isToggled)}>
          <span>&#9776;</span>
        </Styled.ToggleButton>

        <Styled.NavigationList active={isToggled}>
          {links.map(({ name, path }, i) => (
            <Styled.ListItem key={i}>
              <Styled.NavigationLink to={path}>{name}</Styled.NavigationLink>
            </Styled.ListItem>
          ))}

          <Styled.ListItem>
            <Styled.NavigationCTA to='/sign-up'>
              Try for Free
            </Styled.NavigationCTA>
          </Styled.ListItem>
        </Styled.NavigationList>
      </Styled.Navigation>
    </Wrapper>
  );
};

export default Navigation;
