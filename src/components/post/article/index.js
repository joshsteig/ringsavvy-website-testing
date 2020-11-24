import React from 'react';
import Header from '../header';
import FeaturedImage from '../featuredImage';
import Body from '../body';

import { Article } from './style';

export default ({ post }) => {
  const { title, author, createdAt, body, featuredImage } = post;

  return (
    <Article>
      <Header title={title} author={author} date={createdAt} />
      <FeaturedImage alt={title} fluid={featuredImage.fluid} />
      <Body body={body} />
    </Article>
  );
};
