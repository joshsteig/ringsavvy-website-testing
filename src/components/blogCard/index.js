import React from 'react';
import Heading from '../heading/style';
import {
  BlogCardWrapper,
  ContentWrapper,
  ImageWrapper
} from './style';

const BlogCard = ({ data }) => {
  return (
    <BlogCardWrapper to={`/blog/${data.slug}`}>
      <ContentWrapper>
        <ImageWrapper
          backgroundImage={data.featuredImage?.fluid?.src}
          overLay={false}
        />
        <Heading level={3}>{data.title}</Heading>
      </ContentWrapper>
    </BlogCardWrapper>
  );
};

export default BlogCard;
