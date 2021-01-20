import React from 'react';
import * as Styled from './style';

const PricingPlan = ({ plan, position }) => {
  const {
    name,
    minutes,
    price,
    features,
    description,
    ctaLink,
    ctaText,
  } = plan;

  return (
    <Styled.Plan position={position}>
      <Styled.Content alignCenter>
        <Styled.Title>{name}</Styled.Title>
        {minutes && <Styled.Minutes>{minutes} minutes</Styled.Minutes>}
        <Styled.Description>{description}</Styled.Description>
        <Styled.Price>{price}</Styled.Price>
        <Styled.listContainer>
          <Styled.Includes>Includes:</Styled.Includes>
          <Styled.List>
            {features.map((feature, index) => (
              <Styled.ListItem key={index}>{feature}</Styled.ListItem>
            ))}
          </Styled.List>
        </Styled.listContainer>
        <Styled.Button to={ctaLink ? ctaLink : '/sign-up/'}>
          {ctaText ? ctaText : 'Try For Free'}
        </Styled.Button>
      </Styled.Content>
    </Styled.Plan>
  );
};

export default PricingPlan;
