import React from 'react';
import Heading from '../heading/style';
import {
  BlogCardWrapper,
  ImageWrapper
} from './style';

const BlogCard = ({ data }) => {
  return (
    <BlogCardWrapper to={`/blog/${data.slug}`}>
      <ImageWrapper
        fluid={data.featuredImage?.fluid}
        overLay={false}
      />
      <Heading level={3}>{data.title}</Heading>
    </BlogCardWrapper>
  );
};

export default BlogCard;
