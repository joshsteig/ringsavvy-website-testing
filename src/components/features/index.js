import React, { useState } from 'react';
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
  MobileContentBox,
} from './style';

const Features = ({ FeaturesData }) => {
  const [currentTab, setTab] = useState(0);
  const [activeTabs, setTabs] = useState([0]);

  return (
    <Wrapper>
      <GappedWrapper>
        <ContentWrapper>
          <LeftWrapper>
            {FeaturesData.map(({ title, description }, index) => (
              <>
                <FeatureBox
                  onClick={async () => {
                    const indexFound = activeTabs.indexOf(index);
                    if (indexFound === -1) {
                      setTabs([...activeTabs, index]);
                    } else {
                      activeTabs.splice(indexFound, 1);
                      setTabs(activeTabs);
                    }
                    setTab(index);
                  }}
                  active={currentTab === index}
                >
                  <Count>0{index + 1}</Count>
                  <h3> {title} </h3>
                </FeatureBox>
                <MobileContentBox
                  active={activeTabs.some(() => activeTabs.includes(index))}
                >
                  <h3> {title} </h3>
                  <Content
                    dangerouslySetInnerHTML={{
                      __html: description,
                    }}
                    paddingTop={1}
                  />
                  <CTAButton primary padding='large'>
                    {FeaturesData[currentTab].ctaText}
                  </CTAButton>
                </MobileContentBox>
              </>
            ))}
          </LeftWrapper>
          <RightWrapper>
            <RightContent>
              <h3>{FeaturesData[currentTab].title}</h3>
              <Content
                dangerouslySetInnerHTML={{
                  __html: FeaturesData[currentTab].description,
                }}
                paddingTop={1}
              />
              <CTAButton primary padding='large'>
                {FeaturesData[currentTab].ctaText}
              </CTAButton>
            </RightContent>
          </RightWrapper>
        </ContentWrapper>
      </GappedWrapper>
    </Wrapper>
  );
};

export default Features;
