import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Article from '../components/post/article';
import Sidebar from '../components/post/sidebar';
import { Wrapper } from '../components/wrapper';

export default function BlogPostTemplate({ data }) {
  const post = data.contentfulPost;
  const hasSnippetTitle = post.snippetTitle !== null;

  return (
    <Layout isReverse location={post.location}>
      <Helmet>
        <title>{hasSnippetTitle ? post.snippetTitle : post.title}</title>
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
      publishDate(formatString: "MMMM Do, YYYY")
      featuredImage {
        fluid(maxWidth: 605, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      snippetTitle
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            fixed {
              ...GatsbyContentfulFixed
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
            publishDate(formatString: "MMMM Do, YYYY")
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
