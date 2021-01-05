import React from 'react';
import AccordionItem from './accordionItem';
import * as Styled from './style';

const Accordion = ({ tabData }) => (
  <Styled.AccordionList>
    {tabData.map((tab, index) => (
      <AccordionItem tab={tab} index={index} key={index} />
    ))}
  </Styled.AccordionList>
);

export default Accordion;
