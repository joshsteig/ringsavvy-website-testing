import React from 'react';
import * as Styled from './style';

const EmployeeCard = ({ employeeData }) => {
  const { name, title, gravatarUrl } = employeeData;
  return (
    <Styled.EmployeeCard as='div'>
      <Styled.Gravatar src={gravatarUrl} />
      <div>
        <Styled.Name>{name}</Styled.Name>
        <Styled.Title>{title}</Styled.Title>
      </div>
    </Styled.EmployeeCard>
  );
};

export default EmployeeCard;
