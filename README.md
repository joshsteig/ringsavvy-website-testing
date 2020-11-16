# Ring Savvy JAMstack Migration

Migrate the Ring Savvy website from WordPress over to a more modern JAMstack approach where we will use Git workflows, modern build tools & a content API to render blog posts.

More specifically, we will be using React.js & Gatsby.js for the front end, & Contentful’s Headless CMS platform to serve our content’s data to be dynamically rendered onto our blog through APIs & serverless functions.

## Main Goal(s)

With the adoption of modern technology & Agile practices, enable the department to regularly release new content, site features &/or updates more efficiently so the website can continue to deliver value as the business grows & evolves.

## Technology

- [Gatsby.js](https://www.gatsbyjs.com/) (SSG)
- [Gatsby Cloud](https://www.gatsbyjs.com/cloud/)
- [React.js](https://reactjs.org/)
- [Contentful](https://www.contentful.com/) (Headless CMS)
- [GraphQL](https://graphql.org/) (Query data from CMS response)
- [Git](https://git-scm.com/) & [Github](https://github.com/) (Version Control)

## Functionality

### Development (Application side)

- Git Version Control
- Continuous Builds & Deployment
  - on push to git repository
  - on change to Contentful
- Preview/Staging Environment
- Scalable, Reusable & Maintainable CSS
- Optimized image processing & rendering
- SEO Best Practices

### User/Editor (Contentful side)

- Ability to publish & edit blog posts in Contentful without needing the help from a developer
  - Rich Text Editor preferred over Markdown Editor for ease of use (although Markdown offers better functionality & features)
- Ability to stage & preview additions or changes to content in Contentful
- User permissions in Contentful if necessary
- Templated SEO meta fields within content models

## Deliverables

- Optimized content models within Contentful to build blog posts efficiently
  - future iterations & features of content models will be added after the whole blog/website is done with development.
- All published posts on Ring Savvy migrated over to Contentful & rendered correctly.
- All published web pages migrated to React.js with simple, easily scalable & maintainable components
- Automated building & deployment via Git & Gatsby Cloud
- Contentful link to a preview for editor to review additions & changes before publishing
- QA/Staging environment in Contentful for testing new features or content model migrations
- Optimized image processing & rendering
- SEO best practices & meta
