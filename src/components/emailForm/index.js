import React, { useEffect } from 'react';
import { pdfDownload } from '../../utils/embedScripts';
import postscribe from 'postscribe';
import * as Styled from './style';

const EmailForm = () => {
  useEffect(() => {
    postscribe('#formEmbed', pdfDownload, {
      done: function () {
        const input = document.getElementById('field82569298');

        input.setAttribute('placeholder', 'Email Address');
      },
    });
  }, []);

  return (
    <Styled.EmailCTA>
      <Styled.HalfWrapper>
        <h3>Want to revisit this later?</h3>
        <p>Let us send you our company brochure.</p>
      </Styled.HalfWrapper>
      <Styled.HalfWrapper className='pdf-form'>
        <div id='formEmbed' />
      </Styled.HalfWrapper>
    </Styled.EmailCTA>
  );
};

export default EmailForm;
