import React from 'react';
import { FlexRow } from '../globals';
import { Section } from '../section';
import { Wrapper } from '../wrapper';
import Content from '../content';
import Card from '../card';
import EmployeeCard from '../card/employeeCard';

const CardGrid = ({
  cardData,
  employeeData,
  contentData,
  hasDiag = true,
  centered = true,
}) => {
  return (
    <Section hasDiag={hasDiag}>
      <Wrapper>
        <Content centered={centered} contentData={contentData} />
        <FlexRow wrap>
          {employeeData !== undefined
            ? employeeData.map((card, index) => (
                <EmployeeCard employeeData={card} key={index} />
              ))
            : cardData.map((card, index) => (
                <Card cardData={card} key={index} />
              ))}
        </FlexRow>
      </Wrapper>
    </Section>
  );
};

export default CardGrid;
