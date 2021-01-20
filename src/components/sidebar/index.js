import React from 'react';
import More from './more';
import Services from './services';
import * as Styled from './style';

const Sidebar = ({ learnMoreData }) => (
  <Styled.Aside>
    <More learnMoreData={learnMoreData} />
    <Services />
  </Styled.Aside>
);

export default Sidebar;
