import React, { useState } from 'react';
import { Button } from '../button/style';
import { Description } from '../leadSection/style';
import { GappedWrapper, Wrapper } from '../wrapper/style';
import {
  Content,
  ContentWrapper,
  Count,
  CTAButton,
  FeatureBox,
  LeftWrapper,
  RightContent,
  RightWrapper,
  Title,
} from './style';
const Features = ({ FeaturesData }) => {
  const [currentTab, setTab] = useState(0);

  return (
    <Wrapper>
      <GappedWrapper>
        <ContentWrapper>
          <LeftWrapper>
            {FeaturesData.map(({ title }, index) => (
              <FeatureBox
                onClick={() => {
                  setTab(index);
                }}
                active={index === currentTab ? true : false}
              >
                <Count> 0{index + 1}</Count>
                <Title leftMargin={true}>{title}</Title>
              </FeatureBox>
            ))}
          </LeftWrapper>
          <RightWrapper>
            <RightContent>
              <Title>{FeaturesData[currentTab].title}</Title>
              <Content
                dangerouslySetInnerHTML={{
                  __html: FeaturesData[currentTab].description,
                }}
                paddingTop={1}
              ></Content>
              <CTAButton primary padding='large'>
                Learn More
              </CTAButton>
            </RightContent>
          </RightWrapper>
        </ContentWrapper>
      </GappedWrapper>
    </Wrapper>
  );
};

export default Features;
