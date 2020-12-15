import React from 'react';
import Author from './author';

import { Title } from './style';

const Header = ({ title, author, date }) => (
  <header>
    <Title>{title}</Title>
    <Author author={author} date={date} />
  </header>
);

export default Header;
