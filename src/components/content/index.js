import React from 'react';
import * as Styled from './style';

const Content = ({ contentData, horizontal = false, primary = false }) => {
  const { heading, content } = contentData;

  // TODO: Refactor passing of props for styled components
  return (
    <Styled.Container horizontal={horizontal} primary={primary}>
      <Styled.Heading horizontal={horizontal} primary={primary}>
        <h2>{heading}</h2>
      </Styled.Heading>
      <Styled.Content horizontal={horizontal} primary={primary}>
        {content.length > 1 && Array.isArray(content) ? (
          content.map((p, index) => <p key={index}>{p}</p>)
        ) : (
          <p>{content}</p>
        )}
      </Styled.Content>
    </Styled.Container>
  );
};

export default Content;
