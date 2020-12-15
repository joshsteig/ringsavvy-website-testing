import React from 'react';
import NavigationCol from './navigationCol';
import {
  ServiceMenu,
  AboutMenu,
  ResourcesMenu,
  IndustriesMenu,
  SupportMenu,
} from '../menu';
import { Wrapper } from '../wrapper';
import * as Styled from './style';

const Footer = () => (
  <Styled.Footer>
    <Wrapper>
      <Styled.SupportCallout>
        <h3>Have questions? Our team is here to help. Call 917-765-6141</h3>
        <p>Monday to Friday from 8am to 6pm EST.</p>
      </Styled.SupportCallout>
      <Styled.FooterNavigation>
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
      </Styled.FooterNavigation>
      <p>©&nbsp;2020 Ring Savvy, Inc.</p>
    </Wrapper>
  </Styled.Footer>
);

export default Footer;
