import React from 'react'
import styled from 'styled-components';

const StyledHeading = styled.h1`  
  color: ${props=>props.color ? props.color : "#222"};
`;

const Heading = ({ level, ...rest }) => (
  <StyledHeading
    as={`h${level}`}
    {...rest}
  />
);

Heading.defaultProps = {
  level: 1
};

export default Heading;