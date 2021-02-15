import styled from 'styled-components';
import { FlexRow } from '../globals';

export const FormContainer = styled(FlexRow)`
  padding: 2.625em 3em;
  background: ${({ theme }) => theme.global.colors.white};
  border-radius: 10px;
  box-shadow: 0 0 15px rgb(0, 0, 0, 0.12);
  position: relative;
  top: -30px;

  .fsSubmitButton {
    width: auto;

    @media ${({ theme }) => theme.global.mediaQueries.md} {
      text-align: center;
      width: 100%;
    }
  }

  @media ${({ theme }) => theme.global.mediaQueries.lg} {
    box-shadow: none;
    border-radius: 0;
    top: 0;
  }

  @media ${({ theme }) => theme.global.mediaQueries.md} {
    padding: 30px 5%;
  }
`;

export const Form = styled.div`
  border-right: 1px solid #707070;
  flex: 1 100%;
  padding-right: 3.5rem;

  @media ${({ theme }) => theme.global.mediaQueries.md} {
    border-right: none;
    padding: 0;
  }
`;

export const AboutPricing = styled.div`
  flex: 0 100%;
  padding-left: 3.5rem;
  max-width: 392px;

  ul {
    margin: 1em 0 1em 2em;
    padding: 0;
  }

  ul > li {
    margin-bottom: 0.75em;
  }

  @media ${({ theme }) => theme.global.mediaQueries.md} {
    display: none;
  }
`;

export const H3 = styled.h3`
  font-size: ${({ theme }) => theme.global.fontSizes.md};
`;
