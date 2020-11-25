import React from 'react';
import SupportCallout from './supportCallout';
import NavigationCol from './navigationCol';
import {
  ServiceMenu,
  AboutMenu,
  ResourcesMenu,
  IndustriesMenu,
  SupportMenu,
} from '../menu';

import { Wrapper } from '../wrapper/style';
import { Footer, FooterNavigation } from './style';

export default () => (
  <Footer>
    <Wrapper>
      <SupportCallout />
      <FooterNavigation>
        <NavigationCol>
          <ServiceMenu />
        </NavigationCol>
        <NavigationCol>
          <AboutMenu />
        </NavigationCol>
        <NavigationCol>
          <ResourcesMenu />
        </NavigationCol>
        <NavigationCol>
          <IndustriesMenu />
        </NavigationCol>
        <NavigationCol>
          <SupportMenu />
        </NavigationCol>
      </FooterNavigation>
    </Wrapper>
  </Footer>
);
