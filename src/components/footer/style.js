import styled from 'styled-components';

export const Footer = styled.footer`
  background-color: ${(props) => props.theme.global.colors.lightGrey};
  margin-top: 80px;
`;

export const FooterNavigation = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 48px 0;
  li {
    flex: 1;
  }
  @media (max-width: 767px) {
    padding: 1rem 1.25rem;
    flex-wrap: wrap;
    > li {
        width: 100%;
        flex: auto;
    }
  }
`;

export const SupportCallout = styled.div`
  border-bottom: 1px solid #dfdfdf;
  padding: 60px 0 40px;
  text-align: center;
  h3 {
    margin: 0 0 0.3333333em;
  }
  p {
    font-size: ${(props) => props.theme.global.fontSizes.md};
    margin: 0;
  }
`;
