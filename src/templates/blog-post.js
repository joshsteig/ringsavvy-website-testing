import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import get from 'lodash/get';
import Img from 'gatsby-image';
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout';

import heroStyles from '../components/hero.module.css';

export default function BlogPostTemplate(props) {
  const post = get(props, 'data.contentfulPost');
  const siteTitle = get(props, 'data.site.siteMetadata.title');

  const options = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 style={{ color: 'red' }}>{children}</h2>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => (
        <img
          src={`${node.data.target.fields.file['en-US'].url}`}
          alt={node.data.target.fields.title['en-US']}
        />
      ),
    },
  };

  return (
    <Layout location={post.location}>
      <div>
        <Helmet title={`${post.title} | ${siteTitle}`} />
        <div className={heroStyles.hero}>
          <Img
            className={heroStyles.heroImage}
            alt={post.title}
            fluid={post.featuredImage.fluid}
          />
        </div>
        <div className="wrapper">
          <h1 className="section-headline">{post.title}</h1>
          <p>{post.publishDate}</p>
          <div>{documentToReactComponents(post.body.json, options)}</div>
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      createdAt(formatString: "MMMM Do, YYYY")
      featuredImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid
        }
      }
      body: childContentfulPostBodyRichTextNode {
        json
      }
    }
  }
`;
