import React from 'react';

import { RecentPostItem, ArticleLink, Date } from './style';

export default ({ post }) => {
  const { title, slug, createdAt } = post;

  return (
    <RecentPostItem>
      <ArticleLink to={`/blog/${slug}`}>{title}</ArticleLink>
      <Date>{createdAt}</Date>
    </RecentPostItem>
  );
};
