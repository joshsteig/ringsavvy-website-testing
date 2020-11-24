import React from 'react';
import RecentPosts from './recentPosts';
import SignUp from './signUp';

import { Aside, Section } from './style';

export default () => (
  <Aside>
    <Section hasShadow>
      <SignUp />
    </Section>
    <Section>
      <RecentPosts />
    </Section>
  </Aside>
);
