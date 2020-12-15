import React, { useState } from 'react';
import LeadContentSection from '../leadContentSection';
import { Section } from '../section';
import { Wrapper } from '../wrapper';
import {
  Tabs,
  LeftTabWrapper,
  RightTabWrapper,
  TabFeatureBox,
  TabCount,
  TabRightContent,
  TabContent,
  TabCTAButton,
  TabMobileContentBox,
} from './style';

//TODO: Refactor and add animation
export default ({ featuresData, leadContent, horizontal = false }) => {
  const [currentTab, setTab] = useState(0);
  const [activeTabs, setTabs] = useState([0]);

  return (
    <Section>
      <Wrapper>
        <Tabs>
          <LeadContentSection
            leadContent={leadContent}
            horizontal={horizontal}
          />
          <LeftTabWrapper>
            {featuresData.map(({ heading, content }, index) => (
              <React.Fragment key={index}>
                <TabFeatureBox
                  onClick={() => {
                    const indexFound = activeTabs.indexOf(index);
                    if (indexFound === -1) {
                      setTabs([...activeTabs, index]);
                    } else {
                      activeTabs.splice(indexFound, 1);
                      setTabs([...activeTabs]);
                    }
                    setTab(index);
                  }}
                  active={currentTab === index}
                  activeMobile={activeTabs.some(() =>
                    activeTabs.includes(index)
                  )}
                >
                  <TabCount>0{index + 1}</TabCount>
                  <h3>{heading}</h3>
                </TabFeatureBox>
                <TabMobileContentBox
                  active={activeTabs.some(() => activeTabs.includes(index))}
                >
                  <h3>{heading}</h3>
                  <TabContent
                    dangerouslySetInnerHTML={{
                      __html: content,
                    }}
                    paddingTop={1}
                  />
                  <TabCTAButton $primary padding='large' to='/'>
                    {featuresData[currentTab].ctaText}
                  </TabCTAButton>
                </TabMobileContentBox>
              </React.Fragment>
            ))}
          </LeftTabWrapper>
          <RightTabWrapper>
            <TabRightContent>
              <h3>{featuresData[currentTab].heading}</h3>
              <TabContent
                dangerouslySetInnerHTML={{
                  __html: featuresData[currentTab].content,
                }}
                paddingTop={1}
              />
              <TabCTAButton $primary padding='large' to='/'>
                {featuresData[currentTab].ctaText}
              </TabCTAButton>
            </TabRightContent>
          </RightTabWrapper>
        </Tabs>
      </Wrapper>
    </Section>
  );
};
