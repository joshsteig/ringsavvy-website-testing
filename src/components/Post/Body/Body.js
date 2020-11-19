import React from 'react';
import { Link } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import Image from '../Image/Image';

const options = {
  renderNode: {
    [INLINES.ENTRY_HYPERLINK]: (node, children) => {
      const { slug } = node.data.target;
      const url = `/blog/${slug}`;

      return <Link to={url}>{children}</Link>;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, fluid } = node.data.target;

      return <Image alt={title} fluid={fluid} />;
    },
  },
};

export default ({ body }) => <div>{renderRichText(body, options)}</div>;
