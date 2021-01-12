import React from 'react';
import * as Styled from './style';

const Content = ({
  contentData,
  horizontal = false,
  primary = false,
  centered = false,
}) => {
  const { heading, content } = contentData;

  // TODO: Refactor passing of props for styled components, if possible
  return (
    <Styled.Container
      horizontal={horizontal}
      primary={primary}
      centered={centered}
    >
      <Styled.Heading horizontal={horizontal} primary={primary}>
        {heading}
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
