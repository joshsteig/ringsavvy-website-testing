import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import imgSrc from '../../assets/images/users.png';
import imgSrc2 from '../../assets/images/tabs.png';

const benefits = () => {
  return (
    <Container fluid className='benefitsContainer'>
      <Row className='landing-reverse-col'>
        <Col xs={12} lg={5}>
          <img className='benefits_image' src={imgSrc} />
        </Col>
        <Col xs={12} lg={5} style={{ margin: 'auto' }}>
          <h3 className='benefits_heading'>
            Customize your greeting and call forwarding
          </h3>
          <p className='benefits_details'>
            We only need to ask you a few questions about how you’d like your
            phones answered. After that, we set up the call forwarding exactly
            how you want it.
          </p>
        </Col>
      </Row>
      <Row>
       
        <Col xs={12} lg={5} style={{ margin: 'auto' }}>
          <h3 className='benefits_heading'>
            Build out your service
          </h3>
          <p className='benefits_details'>
            Add everything you need to ensure you convert callers and keep your existing customers happy. 
          </p>

        </Col>
        <Col xs={12} lg={5}>
          <img className='benefits_image' src={imgSrc2} />
        </Col>
      </Row>
    </Container>
  );
};

export default benefits;
