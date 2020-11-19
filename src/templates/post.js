import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import get from 'lodash/get';

import PostLayout from '../components/PostLayout';
import Wrapper from '../components/Wrapper/Wrapper';
import Article from '../components/Post/Article/Article';

export default function BlogPostTemplate(props) {
  const post = get(props, 'data.contentfulPost');
  const siteTitle = get(props, 'data.site.siteMetadata.title');

  return (
    <PostLayout location={post.location}>
      <Helmet title={`${post.title} | ${siteTitle}`} />
      <Wrapper>
        <Article post={post} />
      </Wrapper>
    </PostLayout>
  );
}

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      author {
        name
      }
      createdAt(formatString: "MMMM Do, YYYY")
      featuredImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          ... on ContentfulPost {
            contentful_id
            title
            featuredImage {
              fluid {
                ...GatsbyContentfulFluid
              }
            }
            createdAt(formatString: "MMMM Do, YYYY")
            slug
            author {
              name
            }
          }
        }
      }
    }
  }
`;
