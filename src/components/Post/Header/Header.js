import React from 'react';
import { Title } from './Header.styles';

import PostAuthor from '../Author/Author';

export default ({ title, author, date }) => (
  <header>
    <Title>{title}</Title>
    <PostAuthor author={author} date={date} />
  </header>
);
