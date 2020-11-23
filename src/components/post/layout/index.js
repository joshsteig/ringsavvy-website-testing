import React from 'react';
import { ThemeProvider } from 'styled-components';
import Container from '../../container/index';
import Navigation from '../../navigation/index';

import { GlobalStyles } from '../../../theme/globalStyles';
import { GlobalPostStyles } from '../../../theme/globalPostStyles';
import theme from '../../../theme/theme';

export default function Template(props) {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <GlobalPostStyles />
      <GlobalStyles />
      <Container>
        <Navigation />
        {children}
      </Container>
    </ThemeProvider>
  );
}
