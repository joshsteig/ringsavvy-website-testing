import React from 'react';
import { Link } from 'gatsby';

import { Span } from './style';

export default ({ post }) => {
  const { title, slug, createdAt } = post;

  return (
    <li>
      <Link to={`/blog/${slug}`}>{title}</Link>
      <Span>{createdAt}</Span>
    </li>
  );
};
