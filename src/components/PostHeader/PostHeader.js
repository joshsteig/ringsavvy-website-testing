import React from 'react';
import { Title } from './PostHeader.styles';

import PostAuthor from '../PostAuthor/PostAuthor';

export default ({ title, author, date }) => (
  <header>
    <Title>{title}</Title>
    <PostAuthor author={author} date={date} />
  </header>
);
