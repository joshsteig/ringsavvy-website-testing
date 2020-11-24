import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import get from 'lodash/get';

import Layout from '../components/layout';
import Article from '../components/post/article';
import Sidebar from '../components/post/sidebar';
import { Wrapper } from '../components/wrapper/style';

export default function BlogPostTemplate(props) {
  const post = get(props, 'data.contentfulPost');

  return (
    <Layout postLayout location={post.location}>
      <Helmet>
        <title>{`${post.title} - Ring Savvy, Inc.`}</title>
        <meta name='description' content={post.description.description} />
      </Helmet>
      <Wrapper flex>
        <Article post={post} />
        <Sidebar />
      </Wrapper>
    </Layout>
  );
}

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      description {
        description
      }
      author {
        name
        gravatar {
          fluid(maxWidth: 54, quality: 80) {
            ...GatsbyContentfulFluid
          }
          title
        }
      }
      category {
        name
        contentful_id
      }
      createdAt(formatString: "MMMM Do, YYYY")
      featuredImage {
        fluid(maxWidth: 605, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            fluid(maxWidth: 605) {
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
