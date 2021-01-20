import styled from 'styled-components';
import { BaseUnorderedList } from '../globals';

export const Aside = styled.aside`
  margin-left: auto;
  width: 335px;

  @media ${({ theme }) => theme.global.mediaQueries.lg} {
    display: none;
  }
`;

export const Section = styled.section`
  border-radius: ${(props) => (props.hasShadow ? '10px' : null)};
  box-shadow: ${(props) =>
    props.hasShadow ? '0 6px 15px rgba(0, 0, 0, .09)' : null};
  margin-bottom: 36px;
  padding: ${(props) => (props.hasShadow ? '36px 28px' : null)};
`;

export const Title = styled.h4`
  margin-top: 0;
`;

export const P = styled.p`
  font-size: ${({ theme }) => theme.post.fontSizes.sm};
  margin: 0;
`;

export const MoreList = styled(BaseUnorderedList)`
  font-size: ${({ theme }) => theme.global.fontSizes.sm};
`;

export const ListItem = styled.li`
  margin-bottom: 1.625rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;
