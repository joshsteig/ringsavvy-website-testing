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
    [INLINES.HYPERLINK]: (node) => {
      const { uri } = node.data;

      if (uri.indexOf('youtube.com/embed/') !== -1) {
        return (
          <figure>
            <iframe
              width='560'
              height='315'
              src={uri}
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
            ></iframe>
          </figure>
        );
      }
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, fixed } = node.data.target;

      return <Image alt={title} fixed={fixed} />;
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
