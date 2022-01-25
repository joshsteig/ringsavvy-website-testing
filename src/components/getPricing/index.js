import React, { useEffect } from 'react';
import postscribe from 'postscribe';
import { getPricing } from '../../utils/embedScripts';
import { Wrapper } from '../wrapper';
import * as Styled from './style';

const GetPricing = () => {
  useEffect(() => {
    postscribe('#formEmbed', getPricing);
  }, []);

  return (
    <Wrapper>
      <Styled.FormContainer center>
        <Styled.Form id='formEmbed' />
        <Styled.AboutPricing>
          <Styled.H3>About our pricing</Styled.H3>
          <ul>
            <li>We offer plans for businesses of all sizes.</li>
            <li>There are no long term commitments.</li>
            <li>We never charge extra to use premium features.</li>
          </ul>
          <p class='form-questions'>
            Enter your information on the left to see our pricing packages or
            call <a href='tel:6312502794'>631-250-2794</a> to speak with a live
            representative.
          </p>
          <p class='form-appointment'>
            Want to talk later? Schedule a consultation with us{' '}
            <a href='https://ringsavvy.com/book-now'>
              here
            </a>
            .
          </p>
        </Styled.AboutPricing>
      </Styled.FormContainer>
      <p style={{ textAlign: 'center' }}>
        Call us right now at <a href='tel:6312502794'>631-250-2794</a> and we
        will explain all Ring Savvy benefits and pricing.
      </p>
    </Wrapper>
  );
};

export default GetPricing;
