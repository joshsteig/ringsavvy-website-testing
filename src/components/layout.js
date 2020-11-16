import React from 'react';
import './base.css';
import Container from './container';
import Navigation from './navigation';

export default function Template(props) {
  const { children } = props;

  return (
    <Container>
      <Navigation />
      {children}
    </Container>
  );
}
