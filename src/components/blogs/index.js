import React from 'react';
import BlogCard from '../blogCard';
import { Section } from '../section/style';
import { Wrapper } from '../wrapper/style';
import { BlogsWrapper, BlogMain } from './style';

const Blogs = ({ Blogs }) => {
  return (
    <Section>
      <Wrapper>
        <BlogMain>
          <h2>
            For the latest marketing tips, trends, and news, check out our blog!
          </h2>
        </BlogMain>
        <BlogsWrapper>
          {Blogs.map(({ node }) => (
            <BlogCard data={node} />
          ))}
        </BlogsWrapper>
      </Wrapper>
    </Section>
  );
};

export default Blogs;
