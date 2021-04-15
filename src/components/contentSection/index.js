import React from 'react';
import { Section } from '../section';
import { Wrapper } from '../wrapper';
import Content from '../content';
import { hasBackgroundBox } from '../globals';

const ContentSection = ({
  contentData,
  children,
  horizontal = false,
  primary = false,
  centered = false,
  hasBackground = false,
}) => {
  return (
    <Section centered={centered} hasBackground={hasBackground}>
      <Wrapper>
        <Content
          contentData={contentData}
          horizontal={horizontal}
          primary={primary}
          centered={centered}
        />
        {children}
      </Wrapper>
    </Section>
  );
};

export default ContentSection;
