import React from 'react';
import mainLogo from '../../assets/images/ringsavvy-logo.svg';
import reverseLogo from '../../assets/images/ringsavvy-logo_reverse.svg';
import whiteLogo from '../../assets/images/ringsavvy-logo_white.svg';

const Logo = ({ isWhite, isReverse }) => {
  let logo;

  if (isWhite) {
    logo = whiteLogo;
  } else if (isReverse) {
    logo = reverseLogo;
  } else {
    logo = mainLogo;
  }

  return <img src={logo} alt='Ring Savvy' />;
};

export default Logo;
