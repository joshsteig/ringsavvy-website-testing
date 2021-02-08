import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import { Wrapper } from '../components/wrapper';
import { getPricing } from '../utils/renderForm';

// export default function SignUpPage({ location }) {
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
//         {console.log(signUp)}
//         <div dangerouslySetInnerHTML={{ __html: signUp }} />
//       </Wrapper>
//     </Layout>
//   );
// }

export class SignUpPage extends Component {
  componentDidMount() {
    this.refs.test.innerHTML = getPricing;
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
          {console.log(getPricing)}
          <div ref='test'></div>
        </Wrapper>
      </Layout>
    );
  }
}

export default SignUpPage;
