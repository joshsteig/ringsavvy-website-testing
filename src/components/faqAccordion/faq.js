import React, { useState } from 'react';
import useMeasure from '../../utils/useMeasure';
import { animated, useSpring } from 'react-spring';
import * as Styled from './style';

const Faq = ({ faq, index }) => {
  const { question, answer } = faq;
  const [isOpen, setOpen] = useState(false);

  const [bind, { height, top }] = useMeasure();
  const slide = useSpring({
    overflow: 'hidden',
    height: isOpen ? height + top : 0,
    transform: isOpen ? 'translate3d(0, 0, 0)' : 'translate3d(0, -10px, 0)',
  });

  return (
    <Styled.Faq onClick={() => setOpen(!isOpen)} isOpen={isOpen}>
      {question}
      <animated.div style={slide}>
        <Styled.FaqAnswer {...bind}>
          {answer.length > 1 && Array.isArray(answer) ? (
            answer.map((p, index) => <p key={index}>{p}</p>)
          ) : (
            <p>{answer}</p>
          )}
        </Styled.FaqAnswer>
      </animated.div>
    </Styled.Faq>
  );
};

export default Faq;
