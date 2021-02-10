import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import postscribe from 'postscribe';
import { tradeSchools } from '../../utils/embedScripts';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import { Section } from '../../components/section';
import { Wrapper } from '../../components/wrapper';
import { FlexRow } from '../../components/globals';
import { Content } from '../../components/secondaryContent/style';

export default class ScholarshipTradeSchools extends Component {
  componentDidMount() {
    postscribe('#formEmbed', tradeSchools);
  }

  render() {
    const Aside = styled.aside`
      margin-left: auto;
      width: 335px;

      @media ${({ theme }) => theme.global.mediaQueries.lg} {
        width: 100%;
      }
    `;

    const heroData = {
      heading: 'Scholarship for Trade Schools',
    };

    return (
      <Layout location={this.location}>
        <Helmet>
          <title>Scholarship for Trade Schools - RingSavvy, Inc.</title>
          <meta
            name='description'
            content='Scholarship for Trade Schools - RingSavvy, Inc.'
          />
        </Helmet>
        <Hero heading={heroData.heading} />
        <Section className='scholarship-form-page'>
          <Wrapper>
            <FlexRow wrap>
              <Content>
                <h2>Our initiative</h2>
                <p>
                  Ring Savvy is proud to offer a scholarship to help young men
                  and women pay for trade school and enjoy a promising career
                  and future. This scholarship is merit based and seeks to help
                  those who may not have chosen an academic career path but
                  exemplify hard work, diligence, and perseverance through their
                  trade school endeavors.
                </p>
                <h2>Scholarship criteria</h2>
                <p>
                  The Ring Savvy Foundation Scholarship for Trade Schools is
                  open to students who meet the following criteria:
                </p>
                <ul>
                  <li>
                    Applicants must provide current proof of enrollment and good
                    standing with a certified trade school.
                  </li>
                  <li>
                    Applicants must submit a letter of recommendation from their
                    chosen instructor, supervisor, or employer.
                  </li>
                </ul>
                <h2>Ready to apply?</h2>
                <p>
                  In order to receive the Ring Savvy Foundation’s scholarship,
                  students must meet the scholarship’s minimum criteria and
                  submit a completed application along with 1,000 word minimum
                  essay.
                </p>
                <h3>Deadline for applications</h3>
                <p>November 5, 2020</p>
                <h3>Essay Topic</h3>
                <p>Essay must be between 500 and 1000 words.</p>
                <ol>
                  <li>
                    What made you want to pursue a career in your chosen field?
                  </li>
                </ol>
                <h3>Have questions?</h3>
                <p>
                  We’re here to answer your questions about the scholarship
                  opportunity. Email your questions to
                  <a href='mailto:nick@ringsavvy.com'>nick@ringsavvy.com</a>.
                </p>
              </Content>
              <Aside>
                <div id='formEmbed' />
              </Aside>
            </FlexRow>
          </Wrapper>
        </Section>
      </Layout>
    );
  }
}
