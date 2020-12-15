import React from 'react';
import RecentPosts from './recentPosts';
import SignUp from './signUp';

import { Aside } from './style';

const Sidebar = () => (
  <Aside>
    <SignUp />
    <RecentPosts />
  </Aside>
);

export default Sidebar;
