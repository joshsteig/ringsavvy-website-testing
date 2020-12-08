import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { StyledOutlineLink } from '../button/style';

export const NavigationWrapper = styled.header`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 10;
  color: white;
  padding-top: 3rem;

  @media (max-width: 767px) {
    justify-content: space-between;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

export const NavigationList = styled.ul`
  align-items: center;
  display: flex;
  font-size: ${(props) => props.theme.global.fontSizes.base};
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    background: grey;
    align-items: flex-start;
    margin-top: 20px;
    height: 0;
    overflow: hidden;
    ${(props) =>
      props.active &&
      css`
        height: 100%;
        overflow: visible;
      `}
  }
`;

export const NavigationLink = styled(Link)`
  font-family: ${(props) => props.theme.global.fonts.sans};
  font-weight: bold;
  text-decoration: none;
  color: white;

  &:hover {
    background: transparent;
    border: none;
    color: #0abe51;
  }
`;

export const LogoLink = styled(Link)`
  line-height: 0;
  margin-right: auto;
`;

export const ListItem = styled.li`
  margin: 0 0.75em;
  color: white;

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 767px) {
    padding: 15px 20px;
    width: 100%;
    margin: 0;
  }
`;

export const NavigationCTA = styled(StyledOutlineLink)`
  padding: 0.625em 2.75em;
  font-family: ${(props) => props.theme.global.fonts.serif};
  font-weight: 600;

  @media (max-width: 767px) {
    border: none;
    padding: 0;
  }
`;

export const ToggleButton = styled.button`
  font-size: ${(props) => props.theme.global.fontSizes.xl};
  color: ${(props) => props.theme.global.colors.white};
  font-weight: 600;
  display: none;

  span {
    margin-right: 5px;
  }

  &:focus {
    color: ${(props) => props.theme.global.colors.primary};
  }

  @media (max-width: 767px) {
    display: block;
  }
`;
