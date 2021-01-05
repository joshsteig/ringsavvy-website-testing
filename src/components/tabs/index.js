import React, { useState } from 'react';
import LeadContentSection from '../leadContentSection';
import Accordion from '../accordion';
import { Section } from '../section';
import { Wrapper } from '../wrapper';
import { FlexRow } from '../globals';
import { StyledLink } from '../button';
import * as Styled from './style';

const Tabs = ({ tabData, leadContent, horizontal = false }) => {
  const [isActive, setActive] = useState(tabData[0]);

  return (
    <Section>
      <Wrapper>
        <LeadContentSection leadContent={leadContent} horizontal={horizontal} />
        <FlexRow>
          <Styled.TabList>
            {tabData.map((tab, index) => (
              <Styled.Tab
                key={index}
                isActive={isActive === tab}
                onClick={() => setActive(tab)}
                title={tab.heading}
              >
                <Styled.Count>0{index + 1}</Styled.Count>
                {tab.heading}
              </Styled.Tab>
            ))}
          </Styled.TabList>
          <Styled.TabContent>
            <h4>{isActive.heading}</h4>

            {isActive.content.length > 1 && Array.isArray(isActive.content) ? (
              isActive.content.map((p, index) => <p key={index}>{p}</p>)
            ) : (
              <p>{isActive.content}</p>
            )}

            <StyledLink to={isActive.ctaLink}>{isActive.ctaText}</StyledLink>
          </Styled.TabContent>
        </FlexRow>
        <Accordion tabData={tabData} />
      </Wrapper>
    </Section>
  );
};

export default Tabs;
