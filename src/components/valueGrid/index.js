import React from 'react';
import { Section } from '../section';
import { Wrapper } from '../wrapper';
import Content from '../content';
import Value from './value';
import { FlexRow } from '../globals';

const ValueGrid = ({ gridData, contentData, horizontal = false }) => {
  return (
    <Section>
      <Wrapper>
        <Content contentData={contentData} horizontal={horizontal} />
        <FlexRow>
          {gridData.map((value, index) => {
            const isFirst = index === 0 ? true : false;

            return <Value value={value} key={index} isFirst={isFirst} />;
          })}
        </FlexRow>
      </Wrapper>
    </Section>
  );
};

export default ValueGrid;
