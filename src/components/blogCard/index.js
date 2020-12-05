import React from 'react';
import {
  BlogCardWrapper,
  ContentWrapper,
  ImageWrapper,
  Title
} from './style';

const BlogCard = ({ data }) => {
  return (
    <BlogCardWrapper to={`/blog/${data?.slug}`}>
      <ContentWrapper>
        <ImageWrapper
          backgroundImage={data.featuredImage?.fluid?.src}
          overLay={false}
        />
        <Title>{data.title}</Title>
      </ContentWrapper>
    </BlogCardWrapper>
  );
};

export default BlogCard;
