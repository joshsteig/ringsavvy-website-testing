import React from 'react';
import { Link } from 'gatsby';
import * as Styled from './style';

const Service = ({ service, isFirst }) => {
  const { name, icon, description, slug } = service;

  return (
    <Styled.Service isFirst={isFirst} as={Link} to={`/services/${slug}`}>
      <Styled.Icon src={require(`../../assets/images/${icon}`)} alt={name} />
      <Styled.Name>{name}</Styled.Name>
      <Styled.P>{description}</Styled.P>
      <Styled.CtaLink to={`/services/${slug}`} borderPrimary xs>
        Read more
      </Styled.CtaLink>
    </Styled.Service>
  );
};

export default Service;
