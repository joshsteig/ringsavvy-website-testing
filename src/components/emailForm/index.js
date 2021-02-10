import React, { Component } from 'react';
// import postscribe from 'postscribe';
import { pdfDownload } from '../../utils/embedScripts';
import * as Styled from './style';

export default class EmailForm extends Component {
  componentDidMount() {
    const module = typeof window !== `undefined` ? require('postscribe') : null;

    postscribe('#formEmbed', pdfDownload, {
      done: async function () {
        const input = await document.getElementById('field82569298');

        input.setAttribute('placeholder', 'Email Address');
      },
    });
  }

  render() {
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
  }
}
