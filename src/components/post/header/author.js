import React from 'react';
import AuthorGravatar from './authorGravatar';
import { AuthorContainer, MetaContainer, Author, Date } from './style';

export default ({ author, date }) => (
  <AuthorContainer>
    <AuthorGravatar gravatar={author.gravatar} />
    <MetaContainer>
      <Author>{author.name}</Author>
      <Date>{date}</Date>
    </MetaContainer>
  </AuthorContainer>
);
