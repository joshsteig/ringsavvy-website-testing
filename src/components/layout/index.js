import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import Container from '../container';
import Navigation from '../navigation';
import Footer from '../footer';
import { GlobalStyles } from '../../shared/globalStyles';
import { GlobalPostStyles } from '../../shared/globalPostStyles';
import theme from '../../shared/theme';
import favicon from '../../assets/images/ringsavvy_favicon.png';

const Layout = ({ children, isReverse, navHidden, footerHidden }) => (
  <ThemeProvider theme={theme}>
    <Helmet>
      <html lang='en' />
      <link rel='icon' href={favicon} />
    </Helmet>
    <GlobalStyles />
    {isReverse ? <GlobalPostStyles /> : null}
    <Container>
      {!navHidden && <Navigation isReverse={isReverse} />}
      {children}
      {!footerHidden && <Footer />}
    </Container>
  </ThemeProvider>
);

export default Layout;
