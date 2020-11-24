import React from 'react';
import { ThemeProvider } from 'styled-components';
import Container from '../container/index';
import Navigation from '../navigation/index';

import { GlobalStyles } from '../../shared/globalStyles';
import { GlobalPostStyles } from '../../shared/globalPostStyles';
import theme from '../../shared/theme';

export default function Template(props) {
  const { children, postLayout } = props;

  return (
    <ThemeProvider theme={theme}>
      {postLayout ? <GlobalPostStyles /> : null}
      <GlobalStyles />
      <Container>
        <Navigation />
        {children}
      </Container>
    </ThemeProvider>
  );
}
