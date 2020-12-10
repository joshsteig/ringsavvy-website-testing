import React, { useState } from 'react';
import LeadContentSection from '../leadContentSection';
import { Section } from '../section/style';
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

const Tabs = ({ featuresData, leadData, horizontal = false }) => {
  const [currentTab, setTab] = useState(0);
  const [activeTabs, setTabs] = useState([0]);

  return (
    <Section>
      <Wrapper>
        <TabWrapper>
          <LeadContentSection leadData={leadData} horizontal={horizontal} />
          <LeftTabWrapper>
            {featuresData.map(({ title, description }, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <React.Fragment key={index}>
                <TabFeatureBox
                  onClick={async () => {
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
                  <TabCTAButton $primary padding='large' to='/'>
                    {featuresData[currentTab].ctaText}
                  </TabCTAButton>
                </TabMobileContentBox>
              </React.Fragment>
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
              <TabCTAButton $primary padding='large' to='/'>
                {featuresData[currentTab].ctaText}
              </TabCTAButton>
            </TabRightContent>
          </RightTabWrapper>
        </TabWrapper>
      </Wrapper>
    </Section>
  );
};

export default Tabs;
