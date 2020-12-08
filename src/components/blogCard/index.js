import React from 'react';
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
      <h3>{data.title}</h3>
    </BlogCardWrapper>
  );
};

export default BlogCard;
