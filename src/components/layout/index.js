import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import Container from '../container';
import Navigation from '../navigation';
import Footer from '../footer';
import { GlobalStyles } from '../../shared/globalStyles';
import { GlobalPostStyles } from '../../shared/globalPostStyles';
import theme from '../../shared/theme';

const Layout = ({ children, postLayout }) => (
  <ThemeProvider theme={theme}>
    <Helmet>
      <html lang='en' />
    </Helmet>
    <GlobalStyles />
    {postLayout ? <GlobalPostStyles /> : null}
    <Container>
      <Navigation postLayout={postLayout} />
      {children}
      <Footer />
    </Container>
  </ThemeProvider>
);

export default Layout;
