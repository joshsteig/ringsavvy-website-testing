import { Link } from 'gatsby';
import styled, { css } from 'styled-components';
import { StyledOutlineLink } from '../button';

// TODO: Refactor; Add theme props
export const Navigation = styled.header`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 10;
  color: white;
  padding-top: 3rem;

  ${({ isReverse }) =>
    isReverse &&
    css`
      margin-bottom: 80px;
      position: relative;

      a {
        color: ${({ theme }) => theme.global.colors.black};
      }

      ${NavigationCTA} {
        border: 2px solid ${({ theme }) => theme.global.colors.primary};
        color: ${({ theme }) => theme.global.colors.primary};

        &:hover {
          color: ${({ theme }) => theme.global.colors.white};
        }
      }

      ${ToggleButton} {
        color: ${({ theme }) => theme.global.colors.black};
      }

      @media ${({ theme }) => theme.global.mediaQueries.lg} {
        margin-bottom: 40px;
      }
    `}

  @media ${({ theme }) => theme.global.mediaQueries.md} {
    justify-content: space-between;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
  }
`;

export const NavigationList = styled.ul`
  align-items: center;
  display: flex;
  font-size: ${({ theme }) => theme.global.fontSizes.base};
  list-style: none;
  margin: 0;
  padding: 0;

  @media ${({ theme }) => theme.global.mediaQueries.md} {
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
  font-family: ${({ theme }) => theme.global.fonts.sans};
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

  img {
    height: auto;
    width: 201px;
  }
`;

export const ListItem = styled.li`
  margin: 0 0.75em;
  color: white;

  &:last-of-type {
    margin-right: 0;
  }

  @media ${({ theme }) => theme.global.mediaQueries.md} {
    padding: 15px 20px;
    width: 100%;
    margin: 0;
  }
`;

export const NavigationCTA = styled(StyledOutlineLink)`
  padding: 0.625em 2.75em;
  font-family: ${({ theme }) => theme.global.fonts.serif};
  font-weight: 600;

  @media ${({ theme }) => theme.global.mediaQueries.md} {
    border: none;
    padding: 0;
  }
`;

export const ToggleButton = styled.div`
  color: ${({ theme }) => theme.global.colors.white};
  display: none;
  font-size: ${({ theme }) => theme.global.fontSizes.xl};
  font-weight: 600;

  span {
    margin-right: 5px;
  }

  &:focus {
    color: ${({ theme }) => theme.global.colors.primary};
  }

  @media ${({ theme }) => theme.global.mediaQueries.md} {
    display: block;
  }
`;
