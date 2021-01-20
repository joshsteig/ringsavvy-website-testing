import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import arrow from '../../assets/images/has-arrow.svg';

export const Card = styled(Link)`
  background: ${({ theme }) => theme.global.colors.white};
  border-radius: 5px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.12);
  color: #666;
  max-width: 470px;
  margin-bottom: 36px;
  padding: 40px;
  position: relative;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  width: 100%;

  &:hover {
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);

    h4:after {
      left: 22px;
    }
  }

  p {
    margin: 0;
  }

  &:nth-child(even) {
    margin-left: auto;
    position: relative;
    top: 20px;
  }

  @media ${({ theme }) => theme.global.mediaQueries.lg} {
    max-width: none;
    width: 100%;

    &:nth-child(even) {
      margin-left: 0;
      top: 0;
    }
  }
`;

export const Heading = styled.h4`
  color: ${({ theme }) => theme.global.colors.primary};
  margin: 0 0 1em;

  &:after {
    content: url(${arrow});
    left: 16px;
    position: relative;
    top: 2px;
    transition: all 0.2s ease-in-out;
  }
`;

export const EmployeeCard = styled(Card)`
  align-items: center;
  display: flex;
  margin-top: 30px;
  padding: 34px 46px;
`;

export const Name = styled.p`
  color: ${({ theme }) => theme.global.colors.primary};
  font-family: ${({ theme }) => theme.global.fonts.serif};
  font-size: 1.5em;
  font-weight: bold;
`;

export const Title = styled.p`
  font-size: ${({ theme }) => theme.global.fontSizes.lg};
`;

export const Gravatar = styled.img`
  border: 5px solid ${({ theme }) => theme.global.colors.primary};
  border-radius: 50%;
  margin-right: 1.5em;
  height: 108px;
  width: 108px;
`;
