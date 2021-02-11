import React, { useState, useEffect } from 'react';
import { client } from '../../utils/contentful';
import { StyledLink } from '../button';
import { Wrapper } from '../wrapper';
import * as Styled from './style';

const Hero = ({
  heading,
  subHeading,
  primaryCtaLink,
  primaryCtaText,
  secondaryCtaLink,
  secondaryCtaText,
}) => {
  const isSecondary = !subHeading;
  //TODO: use StaticQuery to pull data (Gatsby Image)? or just grab from assets/images (No Gatsby Image)
  const [heroBg, setBg] = useState('');
  useEffect(() => {
    client
      .getAsset('4UAfv2hN8DUQFyCinSQIfJ')
      .then((asset) => setBg(asset.fields.file.url))
      .catch(console.error);
  }, []);

  return (
    <Styled.Hero isSecondary={isSecondary} backgroundImage={heroBg}>
      <Wrapper>
        <Styled.Content>
          <h1>{heading}</h1>
          {subHeading && <Styled.Description>{subHeading}</Styled.Description>}
          {primaryCtaLink && (
            <Styled.CtaWrapper>
              <StyledLink to={primaryCtaLink}>{primaryCtaText}</StyledLink>
              {secondaryCtaLink && (
                <StyledLink secondary to={secondaryCtaLink}>
                  {secondaryCtaText}
                </StyledLink>
              )}
            </Styled.CtaWrapper>
          )}
        </Styled.Content>
      </Wrapper>
    </Styled.Hero>
  );
};

export default Hero;
