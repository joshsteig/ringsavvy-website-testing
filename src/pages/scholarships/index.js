import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import SecondaryContent from '../../components/secondaryContent';

export default function Scholarships({ location }) {
  const heroData = {
    heading: 'Scholarships',
  };

  const scholarships = [
    {
      name: 'Scholarship for Long Island Students',
      amount: '1,000',
      description:
        'Ring Savvy’s Scholarship for Long Island Scholars is dedicated to finding and aiding merit based scholars who are from Long Island and attending school on Long Island as well.',
      slug: 'scholarship-for-long-island-students',
    },
    {
      name: 'Scholarship for Young Entrepeneurs',
      amount: '1,000',
      description:
        'The Ring Savvy Foundation’s Scholarship For Young Entrepreneurs is a merit based scholarship in search of young people with a “self-starter” attitude and creative types who might not fit the traditional educational excellence mold.',
      slug: 'scholarship-for-young-entrepreneurs',
    },
    {
      name: 'Scholarship for Trade School Students',
      amount: '1,000',
      description:
        'Ring Savvy is proud to offer a scholarship to help young men and women pay for trade school and enjoy a promising career and future. This scholarship is merit based and seeks to help those who may not have chosen an academic career path but exemplify hard work, diligence, and perseverance through their trade school endeavors.',
      slug: 'scholarship-for-trade-school-students',
    },
  ];

  return (
    <Layout location={location}>
      <Helmet>
        <title>Scholarships - RingSavvy, Inc.</title>
        <meta
          name='description'
          content='Scholarships - Ring Savvy - Proud To Offer These Opportunities! Apply For Our Scholarship Today, and Good Luck to All Applicants!'
        />
      </Helmet>
      <Hero heading={heroData.heading} />
      <SecondaryContent maxWidth='780px'>
        <p>
          The Ring Savvy Foundation is proud to offer scholarships to deserving
          students who complete applications for which they are eligible. In
          doing so, we get to give back to our local community, our entire
          country, and the types of businesses that give us the opportunity to
          serve them, and help them serve their customers.
        </p>

        <p>
          <strong>
            The Ring Savvy Foundation offers the following scholarships to
            eligible students:
          </strong>
        </p>

        {scholarships.map((scholarship, index) => (
          <div key={index}>
            <p>
              <Link
                to={`/scholarships/${scholarship.slug}`}
              >{`${scholarship.name} ($${scholarship.amount})`}</Link>
            </p>
            <p>{scholarship.description}</p>
          </div>
        ))}
      </SecondaryContent>
    </Layout>
  );
}
