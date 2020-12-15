import React from 'react';

import * as Styled from './style';

const RecentPostItem = ({ post }) => {
  const { title, slug, publishDate } = post;

  return (
    <Styled.RecentPostItem>
      <Styled.ArticleLink to={`/blog/${slug}`}>{title}</Styled.ArticleLink>
      <Styled.Date>{publishDate}</Styled.Date>
    </Styled.RecentPostItem>
  );
};

export default RecentPostItem;
