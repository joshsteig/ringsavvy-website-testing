import React from 'react';
import { Section } from '../section';
import { Wrapper } from '../wrapper';
import Content from '../content';
import { FlexRow, OneHalf } from '../globals';
import Value from './value';
import * as Styled from './style';

const ValueIllustration = ({
  valueData,
  illustration,
  contentData,
  horizontal = false,
}) => {
  return (
    <Section>
      <Wrapper>
        <Content contentData={contentData} horizontal={horizontal} />
        <FlexRow>
          <OneHalf isFirst>
            {valueData.map(({ heading, content }, index) => (
              <Value heading={heading} content={content} key={index} />
            ))}
          </OneHalf>
          <OneHalf>
            <Styled.Illustration src={illustration} alt='New Message!' />
          </OneHalf>
        </FlexRow>
      </Wrapper>
    </Section>
  );
};

export default ValueIllustration;
