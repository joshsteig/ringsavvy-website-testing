import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import Container from '../container';
import Navigation from '../navigation';
import Footer from '../footer';

import { GlobalStyles } from '../../shared/globalStyles';
import { GlobalPostStyles } from '../../shared/globalPostStyles';
import theme from '../../shared/theme';

export default function Template(props) {
  const { children, postLayout } = props;

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <html lang='en' />
      </Helmet>
      {postLayout ? <GlobalPostStyles /> : null}
      <GlobalStyles />
      <Container>
        <Navigation />
        {children}
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
