import React from 'react';
import { Section } from '../section';
import { Wrapper } from '../wrapper';
import Content from '../content';

const ContentSection = ({ contentData, horizontal = false }) => {
  return (
    <Section>
      <Wrapper>
        <Content contentData={contentData} horizontal={horizontal} />
      </Wrapper>
    </Section>
  );
};

export default ContentSection;
