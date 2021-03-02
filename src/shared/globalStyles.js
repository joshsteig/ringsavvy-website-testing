import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import './index.css';

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
  }

  
  html, body {
    overflow-x: hidden;
    width: 100vw;
  }
  
  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }
  
  body {
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    line-height: 1.5;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }
  
  a {
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  
  p {
    margin: 0 0 1em;
  }
  
  figure {
    margin: 0;
    width: 100%;
  }
  
  p,
  ul,
  ol {
    color: ${({ theme }) => theme.global.colors.grey};
  }

  a {
    color: ${({ theme }) => theme.global.colors.primary}
  }

  a:hover {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {   
    font-family: ${({ theme }) => theme.global.fonts.serif};
    color: ${({ theme }) => theme.global.colors.black};
    font-weight: bold;
    line-height: 1.2;
    margin : 0 0 24px;
  }

  h1 {
    font-size: ${({ theme }) => theme.global.fontSizes.xxl}
  }

  h2 {
    font-size: ${({ theme }) => theme.global.fontSizes.xxl}
  }

  h3 {
    font-size: ${({ theme }) => theme.global.fontSizes.xl}
  }

  h4 {
    font-size: ${({ theme }) => theme.global.fontSizes.lg}
  }

  @media ${({ theme }) => theme.global.mediaQueries.sm} {
    h1 {
      font-size: ${({ theme }) => theme.global.fontSizes.xl}
    }

    h2 {
      font-size: ${({ theme }) => theme.global.fontSizes.xl}
    }

    h3 {
      font-size: ${({ theme }) => theme.global.fontSizes.lg}
    }

    h4 {
      font-size: ${({ theme }) => theme.global.fontSizes.md}
    }
  }

  /* Form Styles */
  form :focus {
    outline: none;
  }

  #formEmbed .fsBody,
  #formEmbed .fsBody .fsForm {
    margin: 0;
    padding: 0;
  }

  #formEmbed .fsBody .fsForm .fsSectionHeading {
    color: ${({ theme }) => theme.global.colors.black};
    font-size: ${({ theme }) => theme.global.fontSizes.lg};
    font-weight: bold;
    margin: 0;
    text-align: center;
  }

  #formEmbed .fsBody .fsRowBody,
  #formEmbed .fsBody .fsFieldRow {
    margin-bottom: 0!important;
  }

  #formEmbed .fsBody .fsLabel,
  #formEmbed .fsBody label {
      display: block;
      font-size: 12px;
      margin: 0 0 .5em;
  }

  #formEmbed .fsSubFieldGroup {
    align-items: baseline;
    display: flex;
    flex-wrap: wrap;
  }

  #formEmbed .fsBody .fsSubField {
    display: flex;
    flex-direction: column-reverse;
    flex: 1;
  }

  #formEmbed .fsRowBody input[type="text"].fsRequired,
  #formEmbed .fsRowBody input[type="email"].fsRequired,
  #formEmbed .fsRowBody input[type="number"].fsRequired,
  #formEmbed .fsRowBody input[type="tel"].fsRequired,
  #formEmbed .fsForm select.fsRequired,
  #formEmbed .fsForm textarea.fsRequired {
      border: 1px solid #707070;
      border-radius: 3px;
      color: #4D4D4D;
      height: 36px;
      margin-bottom: 20px;
      padding: 0 12px;
      width: 100%;
  }

  #formEmbed .fsLastCell,
  #formEmbed .fsLastField {
      margin-bottom: 0;
  }

  #formEmbed .fsForm select:not([multiple="multiple"]) {
    background-image: none;
  }

  #formEmbed button,
  #formEmbed input[type="submit"],
  #formEmbed .button {
    align-items: center;
    background: ${({ theme }) => theme.global.colors.primary}!important;
    border-radius: 100px!important;
    box-shadow: 0 5px 12px 0 rgba(0, 0, 0, 0.14);
    color: #ffffff;
    cursor: pointer;
    display: inline-flex;
    font-family: ${({ theme }) => theme.global.fonts.serif};
    font-size: ${({ theme }) => theme.global.fontSizes.base}!important;
    font-weight: bold;
    line-height: 1;
    margin-top: 16px;
    padding: 0.75em 3.25em;
    text-align: center;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
  }

  #formEmbed button:hover,
  #formEmbed input[type="submit"]:hover,
  #formEmbed .button:hover {
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.25);
    transform: translateY(0.16em);
  }

  #formEmbed .fsForm .fsSubmit,
  #formEmbed .fsPagination {
    margin: 0;
    padding: 0;
  }

  .fsHidden {
      display: none;
  }

  .fsSubmitButton {
      width: 100%;
  }

  #formEmbed [fs-field-type="name"] .fsLabel,
  #formEmbed [fs-field-type="address"] .fsLabel {
    display: none;
  }

  #formEmbed .fsSupporting > span.hidden {
    position: relative;
    overflow: visible;
    left: 0;
    margin-left: 2.5px;
    font-size: 16px;
    color: #595d64;
  }

  /* Scholarship form styles */
  .scholarship-form-page #formEmbed .fsBody .fsForm .fsSectionHeading {
    color: ${({ theme }) => theme.global.colors.primary}!important;
    font-size: ${({ theme }) => theme.global.fontSizes.base}!important;
    font-weight: bold;
    text-align: left;
  }

  .scholarship-form-page #formEmbed .fsBody .fsForm .fsSectionHeader {
    margin-top: 20px;
  }
  
  .scholarship-form-page #formEmbed .fsSubField.fsFieldAddress {
    flex: 100%;
  }

  /* PDF download form styles */
  #formEmbed #fsForm3592576 {
    width: 100%;
    align-items: center;
    background: #fff;
    border-radius: 50px;
    display: flex;
    height: 58px;
    padding: 0 12px 0 16px;
    position: relative;
  }

  #formEmbed .fsBody #label82569298 {
    display: none;
  }
  
  .pdf-form #formEmbed .fsBody .fsForm input {
    border: none;
    height: 100%;
    width: 100%;
  }
  
  .pdf-form #formEmbed .fsBody .fsForm .fsField {
    padding: 0 12px;
  }
  
  .pdf-form #formEmbed .fsBody .fsForm .fsField::placeholder {
    color: #999999;
    font-family: ${({ theme }) => theme.global.fonts.serif};
    font-size: ${({ theme }) => theme.global.fontSizes.base};
    font-weight: normal;
  }
  
  .pdf-form #formEmbed .fsBody .fsForm .fsSubmit {
    position: absolute;
    right: 10px;
  }
  
  .pdf-form #formEmbed .fsBody .fsForm .fsSubmitButton {
    margin: 0;
  }
`;
