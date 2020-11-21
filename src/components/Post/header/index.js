import React from 'react';
import Author from './author';

import { Title } from './style';

export default ({ title, author, date }) => (
  <header>
    <Title>{title}</Title>
    <Author author={author} date={date} />
  </header>
);
