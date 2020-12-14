import React from 'react';
import { Link } from 'gatsby';

import { PreviewContainer, PostThumbnail, StyledLink, MoreLink } from './style';

export default ({ post }) => (
  <PreviewContainer>
    <Link to={`/blog/${post.slug}`}>
      <PostThumbnail alt={post.title} fluid={post.featuredImage.fluid} />
    </Link>
    <StyledLink style={{ textDecoration: 'none' }} to={`/blog/${post.slug}`}>
      <h2>{post.title}</h2>
    </StyledLink>
    <p
      dangerouslySetInnerHTML={{
        __html: post.description.childMarkdownRemark.html,
      }}
    />
    <MoreLink to={`/blog/${post.slug}`}>Continue Reading →</MoreLink>
  </PreviewContainer>
);
