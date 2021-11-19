import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imgSrc from '../../assets/images/benifits.jpg';

const benefits = () => {
  return (
    <Container className='benefitsContainer'>
      <Row>
        <Col xs={12} lg={6} style={{ margin: 'auto' }}>
          <h3>What Makes Ring Savvy Different Better</h3>
          <p className='benefits_details'>
            Telemarketers, robo-calls, and “your car’s extended warranty” are
            not counted toward your minutes. We only charge for calls that make
            you money.
          </p>
        </Col>
        <Col xs={12} lg={6}>
          <img className='benefits_image' src={imgSrc} />
        </Col>
      </Row>
    </Container>
  );
};

export default benefits;
