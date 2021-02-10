import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import postscribe from 'postscribe';
import { youngEntrepeneurs } from '../../utils/embedScripts';
import Layout from '../../components/layout';
import Hero from '../../components/hero';
import { Section } from '../../components/section';
import { Wrapper } from '../../components/wrapper';
import { FlexRow } from '../../components/globals';
import { Content } from '../../components/secondaryContent/style';

export default class ScholarshipYoungEntrepeneurs extends Component {
  componentDidMount() {
    postscribe('#formEmbed', youngEntrepeneurs);
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
      heading: 'Scholarship for Young Entrepeneurs',
    };

    return (
      <Layout location={this.location}>
        <Helmet>
          <title>Scholarship for Young Entrepeneurs - RingSavvy, Inc.</title>
          <meta
            name='description'
            content='Scholarship for Young Entrepeneurs - RingSavvy, Inc.'
          />
        </Helmet>
        <Hero heading={heroData.heading} />
        <Section className='scholarship-form-page'>
          <Wrapper>
            <FlexRow wrap>
              <Content>
                <h2>Our initiative</h2>
                <p>
                  Ring Savvy’s Scholarship for Long Island Scholars is dedicated
                  to finding and aiding merit based scholars who are from Long
                  Island and attending school on Long Island as well.
                </p>
                <p>
                  As a family-owned business that started and remains solely on
                  Long Island, we are excited to be able to give back to our
                  home and community by offering a merit scholarship.
                </p>
                <h2>Scholarship criteria</h2>
                <p>
                  Ring Savvy’s Scholarship is open to students who meet the
                  following criteria:
                </p>
                <ul>
                  <li>
                    Applicants must be currently enrolled in a college or
                    university located on Long Island.
                  </li>
                  <li>
                    Applicants must provide proof of Long Island residence.
                  </li>
                  <li>Applicants must have a minimum 3.5 GPA.</li>
                  <li>
                    Applicants must submit an unofficial copy of their
                    transcript.
                  </li>
                  <li>
                    Applicants must fill out the application in its entirety,
                    including any and all additional essays, transcripts, proof
                    of residence, and information asked for in the application.
                  </li>
                </ul>
                <h2>Ready to apply?</h2>
                <p>
                  In order to be eligible to receive Ring Savvy’s Scholarship,
                  students must meet the scholarship’s minimum criteria, provide
                  proof of eligibility, and submit a completed application along
                  with a 500-1,000 word essay. Essay prompts are listed below.
                </p>
                <h3>Deadline for applications</h3>
                <p>November 5, 2020</p>
                <h3>Essay Topics</h3>
                <p>
                  Please choose one of the following questions provided for your
                  essay. Essays must be between 500 and 1000 words.
                </p>
                <ol>
                  <li>
                    Tell us about a challenge you faced. How did you overcome
                    it? Be as creative as you want.
                  </li>
                </ol>
                <h3>Have questions?</h3>
                <p>
                  We’re here to answer your questions about the scholarship
                  opportunity. Email your questions to nick@ringsavvy.com.
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
