import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import { Wrapper } from '../components/wrapper';
import { signUp } from '../utils/forms';
import useScript from '../utils/useScript';

// export default function SignUpPage({ location }) {
//   useScript(signUp);

//   return (
//     <Layout location={location}>
//       <Helmet>
//         <title>Sign Up | Ring Savvy | Get Our 7 Day Free Trial Now!</title>
//         <meta
//           name='description'
//           content='Sign Up | Ring Savvy | Get Our 7 Day Free Trial With Access to Every Feature We Offer. No Credit Card Down to Try, So Sign Up Now!'
//         />
//       </Helmet>
//       <Wrapper>
//         <div id='script' />
//       </Wrapper>
//     </Layout>
//   );
// }

export class SignUp extends Component {
  componentDidMount() {
    const loadScript = function (src) {
      const tag = document.createElement('script');
      tag.async = false;
      tag.src = src;

      const tgt = document.getElementById('script');
      tgt.appendChild(tag);
    };

    loadScript(signUp);
  }
  render() {
    return (
      <Layout location={this.location}>
        <Helmet>
          <title>Sign Up | Ring Savvy | Get Our 7 Day Free Trial Now!</title>
          <meta
            name='description'
            content='Sign Up | Ring Savvy | Get Our 7 Day Free Trial With Access to Every Feature We Offer. No Credit Card Down to Try, So Sign Up Now!'
          />
        </Helmet>
        <Wrapper>
          <div id='script' />
        </Wrapper>
      </Layout>
    );
  }
}

export default SignUp;
