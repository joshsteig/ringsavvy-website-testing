import React from 'react';
import { BlogCardWrapper, ContentWrapper, ImageWrapper, Title } from './style';
const BlogCard = ({ data }) => {
  return (
    <BlogCardWrapper>
      <ContentWrapper>
        <ImageWrapper
          backgroundImage={data.image}
          overLay={data.overLay ? true : false}
        ></ImageWrapper>
        <Title>{data.title}</Title>
      </ContentWrapper>
    </BlogCardWrapper>
  );
};

export default BlogCard;
