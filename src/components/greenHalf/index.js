import React from 'react';
import { useSpring, animated } from 'react-spring';
import * as Styled from './style';
import Logo from '../logo';
import { LogoLink } from '../navigation/style';

const GreenHalf = ({ text }) => {
  const slideIn = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0)' },
  });

  return (
    <animated.div style={{ maxWidth: '43%', flex: 1, ...slideIn }}>
      <Styled.GreenBg center>
        <Styled.LogoContainer>
          <LogoLink to='/'>
            <Logo isWhite />
          </LogoLink>
        </Styled.LogoContainer>
        {text}
      </Styled.GreenBg>
    </animated.div>
  );
};

export default GreenHalf;
