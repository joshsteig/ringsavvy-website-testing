import styled, { css } from 'styled-components';

export const promo = styled.div`
  color: #fff;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  height: 70px;
  justify-content: center;
  background-color: #208538;

  @media (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 15px;
    padding-bottom: inherit;
    height: auto;
  }
`;
