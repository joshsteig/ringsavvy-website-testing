import React from 'react';
import * as Styled from './style';

const Faq = ({ faq }) => {
  const { question, answer } = faq;
  return (
    <Styled.Faq>
      <Styled.Question>{question}</Styled.Question>
      <p>{answer}</p>
    </Styled.Faq>
  );
};

export default Faq;
