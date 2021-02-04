import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';
import { Wrapper } from '../components/wrapper';

function renderForm() {
  return {
    __html: `<script type="text/javascript" src="https://answeringlegal.formstack.com/forms/js.php/sign_up_copy_7"></script><noscript><a href="https://answeringlegal.formstack.com/forms/sign_up_copy_7" title="Online Form">Online Form - RS Sign Up</a></noscript><div style="text-align:right; font-size:x-small;"><a href="http://www.formstack.com?utm_source=jsembed&utm_medium=product&utm_campaign=product+branding&fa=h,3664144" title="Powered by Formstack">Powered by Formstack</a></div>`,
  };
}

export default function SignUpPage({ location }) {
  return (
    <Layout location={location}>
      <Helmet>
        <title>Sign Up | Ring Savvy | Get Our 7 Day Free Trial Now!</title>
        <meta
          name='description'
          content='Sign Up | Ring Savvy | Get Our 7 Day Free Trial With Access to Every Feature We Offer. No Credit Card Down to Try, So Sign Up Now!'
        />
      </Helmet>
      <Wrapper>
        <div dangerouslySetInnerHTML={renderForm()} />
      </Wrapper>
    </Layout>
  );
}
