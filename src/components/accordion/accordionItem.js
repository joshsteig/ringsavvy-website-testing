import React, { useState } from 'react';
import styled from 'styled-components';
import useMeasure from '../../utils/useMeasure';
import { animated, useSpring } from 'react-spring';
import { StyledLink } from '../button';
import { Count } from '../tabs/style';
import * as Styled from './style';

const AccordionContent = styled.article`
  max-width: none;
  padding: 1em 5% 3.25em;
  width: 100%;

  h4 {
    margin-bottom: 1em;
  }

  p:last-of-type {
    margin-bottom: 1.625em;
  }
`;

const AccordionItem = ({ tab, index }) => {
  const { heading, content, ctaText, ctaLink } = tab;
  const [isOpen, setOpen] = useState(tab[0]);

  const [bind, { height, top }] = useMeasure();
  const slide = useSpring({
    overflow: 'hidden',
    height: isOpen ? height + top + 52 : 0,
    transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(0, -20px, 0)',
  });

  return (
    <li>
      <Styled.AccordionTab onClick={() => setOpen(!isOpen)} isOpen={isOpen}>
        <Count>0{index + 1}</Count>
        {heading}
      </Styled.AccordionTab>
      <animated.div style={slide}>
        <AccordionContent {...bind}>
          <h4>{heading}</h4>

          {content.length > 1 && Array.isArray(content) ? (
            content.map((p, index) => <p key={index}>{p}</p>)
          ) : (
            <p>{content}</p>
          )}

          <StyledLink to={ctaLink}>{ctaText}</StyledLink>
        </AccordionContent>
      </animated.div>
    </li>
  );
};

export default AccordionItem;
