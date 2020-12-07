import React from 'react';
import BlogCard from '../blogCard';
import Heading from '../heading/style';
import { GappedWrapper, Wrapper } from '../wrapper/style';
import { BlogsWrapper, BlogMain } from './style';

const Blogs = ({ Blogs }) => {
  return (
    <Wrapper>
      <GappedWrapper>
        <BlogMain>
          <Heading level={2}>
            For the latest marketing tips, trends, and news, check out our blog!
          </Heading>
        </BlogMain>
        <BlogsWrapper>
          {Blogs.map(({ node }) => (
            <BlogCard data={node} />
          ))}
        </BlogsWrapper>
      </GappedWrapper>
    </Wrapper>
  );
};

export default Blogs;
