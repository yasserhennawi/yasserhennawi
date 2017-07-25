import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  /* https://material.io/guidelines/style/typography.html# */
  h1, h2, h3, h4, h5, h6, p, a, hr, ul, li, pre {
    padding: 0px;
    margin: 0px;
    font-weight: normal;
    font-family: 'Roboto';
    color: rgba(0,0,0,0.87);
    line-height: 1.5;
  }
  h1 {
    font-size: 36px;
    ${'' /* line-height: 36px; */}
  }
  h2 {
    font-size: 30px;
    ${'' /* line-height: 30px; */}
  }
  h3 {
    font-size: 24px;
    ${'' /* line-height: 24px; */}
  }
  h4 {
    font-size: 18px;
    ${'' /* line-height: 18px; */}
  }
  h5, p {
    font-size: 14px;
    ${'' /* line-height: 14px; */}
  }
  h6 {
    font-size: 12px;
    ${'' /* line-height: 12px; */}
  }
`;
