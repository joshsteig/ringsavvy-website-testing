import React from 'react';
import Container from './Container';
import Navigation from './Navigation';

import { GlobalStyles } from './GlobalStyles';

export default function Template(props) {
  const { children } = props;

  return (
    <>
      <GlobalStyles />
      <Container>
        <Navigation />
        {children}
      </Container>
    </>
  );
}
