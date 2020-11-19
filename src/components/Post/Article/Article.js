import React from 'react';
import Header from '../Header/Header';
import FeaturedImage from '../FeaturedImage/FeaturedImage';
import Body from '../Body/Body';

import { Article } from './Article.styles';

export default ({ post }) => {
  const { title, author, createdAt, body, featuredImage } = post;

  return (
    <Article>
      <Header title={title} author={author.name} date={createdAt} />
      <FeaturedImage alt={title} fluid={featuredImage.fluid} />
      <Body body={body} />
    </Article>
  );
};
