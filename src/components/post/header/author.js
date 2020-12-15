import React from 'react';
import AuthorGravatar from './authorGravatar';

import * as Styled from './style';
// AuthorContainer, MetaContainer, Author, Date

const Author = ({ author, date }) => (
  <Styled.AuthorContainer>
    <AuthorGravatar gravatar={author.gravatar} />
    <Styled.Meta>
      <Styled.Name>{author.name}</Styled.Name>
      <Styled.Date>{date}</Styled.Date>
    </Styled.Meta>
  </Styled.AuthorContainer>
);

export default Author;
