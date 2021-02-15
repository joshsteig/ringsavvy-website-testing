import React from 'react';
import * as Styled from './style';
import Logo from '../logo';
import { LogoLink } from '../navigation/style';

const GreenHalf = ({ text }) => (
  <Styled.GreenBg center>
    <Styled.LogoContainer>
      <LogoLink to='/'>
        <Logo isWhite />
      </LogoLink>
    </Styled.LogoContainer>
    <Styled.Text>{text}</Styled.Text>
  </Styled.GreenBg>
);

export default GreenHalf;
