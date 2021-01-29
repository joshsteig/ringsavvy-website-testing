import React from 'react';
import { Section } from '../section';
import { Wrapper } from '../wrapper';
import Sidebar from '../sidebar';
import * as Styled from './style';

const SecondaryContent = ({
  children,
  hasSidebar,
  learnMoreData,
  maxWidth,
}) => {
  return (
    <Section>
      <Wrapper flex>
        <Styled.Content maxWidth={maxWidth}>{children}</Styled.Content>
        {hasSidebar && <Sidebar learnMoreData={learnMoreData} />}
      </Wrapper>
    </Section>
  );
};

export default SecondaryContent;
