import React, { useState } from 'react';
import Heading from '../heading/style';
import {
  GappedWrapper,
  Wrapper
} from '../wrapper/style';
import {
  Content,
  ContentWrapper,
  Count,
  CTAButton,
  FeatureBox,
  LeftWrapper,
  RightContent,
  RightWrapper,
  MobileContentBox 
} from './style';

const Features = ({ FeaturesData }) => {
  const [currentTab, setTab] = useState(0);
  const [activeTabs, setTabs] = useState([0])

  return (
    <Wrapper>
      <GappedWrapper>
        <ContentWrapper>
          <LeftWrapper>
            {FeaturesData.map(({ title,description }, index) => (
              <>
                <FeatureBox
                  onClick={async() => {                 
                    let indexFound = activeTabs.indexOf(index)
                    if(indexFound === -1 ){
                      let tabs = [...activeTabs]
                      tabs.push(index)
                      setTabs((prev)=>tabs)                  
                    }
                    else{
                      let tabs = [...activeTabs]
                      tabs.splice(indexFound,1)
                      setTabs((prev)=>tabs)
                    }
                    setTab((prev)=>index);
                  }}
                  active={currentTab === index ? true : false}
                >
                  <Count> 0{index + 1}</Count>
                  <Heading level={3} color="#ffffff" >{title}</Heading>
                </FeatureBox>
                <MobileContentBox active={activeTabs.some(()=> activeTabs.includes(index))}>
                  <Heading level={3}>{title}</Heading>
                  <Content
                    dangerouslySetInnerHTML={{
                      __html: description,
                    }}
                    paddingTop={1}
                  />
                  <CTAButton primary padding='large'> Learn More </CTAButton>
                </MobileContentBox>
              </>              
            ))}
          </LeftWrapper>
          <RightWrapper>
            <RightContent>
              <Heading level={3}>{FeaturesData[currentTab].title}</Heading>
              <Content
                dangerouslySetInnerHTML={{
                  __html: FeaturesData[currentTab].description,
                }}
                paddingTop={1}
              />
              <CTAButton primary padding='large'>  Learn More </CTAButton>
            </RightContent>
          </RightWrapper>
        </ContentWrapper>
      </GappedWrapper>
    </Wrapper>
  );
};

export default Features;
