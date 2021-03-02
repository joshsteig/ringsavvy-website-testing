import React from 'react';
import { StyledLink } from '../button';
import { Wrapper } from '../wrapper';
import * as Styled from './style';
import heroBg from '../../assets/images/receptionist-hero-overlay.jpg';

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
