import React from 'react';
import { graphql, Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import get from 'lodash/get';
import Img from 'gatsby-image';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

import Layout from '../components/Layout';
import Wrapper from '../components/Wrapper/Wrapper';
import PostHeader from '../components/PostHeader/PostHeader';

const options = {
  renderNode: {
    [INLINES.ENTRY_HYPERLINK]: (node, children) => {
      const { slug } = node.data.target;
      const url = `/blog/${slug}`;

      return <Link to={url}>{children}</Link>;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => <Img {...node.data.target} />,
  },
};

export default function BlogPostTemplate(props) {
  const post = get(props, 'data.contentfulPost');
  const siteTitle = get(props, 'data.site.siteMetadata.title');

  return (
    <Layout location={post.location}>
      <Helmet title={`${post.title} | ${siteTitle}`} />
      <Wrapper>
        <article>
          <PostHeader
            title={post.title}
            author={post.author.name}
            date={post.createdAt}
          />
          <Img alt={post.title} fluid={post.featuredImage.fluid} />
          <div className="wrapper">
            <p>{post.publishDate}</p>
            <div>{renderRichText(post.body, options)}</div>
          </div>
        </article>
      </Wrapper>
    </Layout>
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
