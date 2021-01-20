import React from 'react';
import { Section } from '../section';
import { Wrapper } from '../wrapper';
import Content from '../content';

const ContentSection = ({ contentData, children, horizontal = false }) => {
  return (
    <Section>
      <Wrapper>
        <Content contentData={contentData} horizontal={horizontal} />
        {children}
      </Wrapper>
    </Section>
  );
};

export default ContentSection;
