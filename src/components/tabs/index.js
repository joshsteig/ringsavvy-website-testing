import React, { useState } from 'react';
import { Wrapper } from '../wrapper/style';
import {
  TabWrapper,
  LeftTabWrapper,
  RightTabWrapper,
  TabFeatureBox,
  TabCount,
  TabRightContent,
  TabContent,
  TabCTAButton,
  TabMobileContentBox,
} from './style';

const Tabs = ({ featuresData }) => {
  const [currentTab, setTab] = useState(0);
  const [activeTabs, setTabs] = useState([0]);

  return (
    <Wrapper>
      <TabWrapper>
        <LeftTabWrapper>
          {featuresData.map(({ title, description }, index) => (
            <>
              <TabFeatureBox
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
                <TabCount>0{index + 1}</TabCount>
                <h3> {title} </h3>
              </TabFeatureBox>
              <TabMobileContentBox
                active={activeTabs.some(() => activeTabs.includes(index))}
              >
                <h3> {title} </h3>
                <TabContent
                  dangerouslySetInnerHTML={{
                    __html: description,
                  }}
                  paddingTop={1}
                />
                <TabCTAButton primary padding='large'>
                  {featuresData[currentTab].ctaText}
                </TabCTAButton>
              </TabMobileContentBox>
            </>
          ))}
        </LeftTabWrapper>
        <RightTabWrapper>
          <TabRightContent>
            <h3>{featuresData[currentTab].title}</h3>
            <TabContent
              dangerouslySetInnerHTML={{
                __html: featuresData[currentTab].description,
              }}
              paddingTop={1}
            />
            <TabCTAButton primary padding='large'>
              {featuresData[currentTab].ctaText}
            </TabCTAButton>
          </TabRightContent>
        </RightTabWrapper>
      </TabWrapper>
    </Wrapper>
  );
};

export default Tabs;
