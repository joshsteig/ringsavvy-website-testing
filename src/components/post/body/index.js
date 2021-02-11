import React, { Component } from 'react';
import { Link } from 'gatsby';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from '../image';

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
    [BLOCKS.LIST_ITEM]: (node) => {
      const UnTaggedChildren = documentToReactComponents(node, {
        renderNode: {
          // eslint-disable-next-line no-shadow
          [BLOCKS.PARAGRAPH]: (node, children) => children,
          // eslint-disable-next-line no-shadow
          [BLOCKS.LIST_ITEM]: (node, children) => children,
        },
      });

      return <li>{UnTaggedChildren}</li>;
    },
  },
};

// TODO: refactor to useEffect
export default class Body extends Component {
  componentDidMount() {
    const sections = document.querySelectorAll('h2');
    let sectionNum = 0;

    sections.forEach((section) => {
      sectionNum += 1;

      section.setAttribute('id', `section-${sectionNum}`);
    });
  }

  render() {
    const { body } = this.props;
    return <div>{renderRichText(body, options)}</div>;
  }
}
