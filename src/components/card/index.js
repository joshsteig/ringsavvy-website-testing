import React from 'react';
import * as Styled from './style';

const Card = ({ cardData }) => {
  const { heading, content, linkUrl } = cardData;

  // TODO: add icon img to card
  return (
    <Styled.Card to={linkUrl}>
      <Styled.Heading>{heading}</Styled.Heading>
      <p>{content}</p>
    </Styled.Card>
  );
};

export default Card;
