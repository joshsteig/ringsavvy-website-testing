import React from 'react';
import { StyledLink } from '../button';

// TODO: Refactor into own component? use with tabs also
const Cta = ({ data }) => {
  const { heading, content, ctaLink, ctaText } = data;

  return (
    <>
      <h4>{heading}</h4>

      {content.length > 1 && Array.isArray(content) ? (
        content.map((p, index) => <p key={index}>{p}</p>)
      ) : (
        <p>{content}</p>
      )}

      <StyledLink to={ctaLink}>{ctaText}</StyledLink>
    </>
  );
};

export default Cta;
