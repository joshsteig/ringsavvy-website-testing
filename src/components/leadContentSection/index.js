import React from 'react';
import * as Styled from './style';

const LeadContentSection = ({ leadContent, horizontal = false }) => {
  const { heading, content } = leadContent;

  return (
    <Styled.LeadContentSection horizontal={horizontal}>
      <Styled.Heading horizontal={horizontal}>
        <h2>{heading}</h2>
      </Styled.Heading>
      <Styled.Content horizontal={horizontal}>
        {content.length > 1 && Array.isArray(content) ? (
          content.map((p, index) => <p key={index}>{p}</p>)
        ) : (
          <p>{content}</p>
        )}
      </Styled.Content>
    </Styled.LeadContentSection>
  );
};

export default LeadContentSection;
