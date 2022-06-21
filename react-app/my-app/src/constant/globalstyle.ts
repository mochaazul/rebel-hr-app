import { createGlobalStyle } from 'styled-components';
import fonts from './fonts';

import Sizes from './sizes';

export default createGlobalStyle`

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    line-height: 1;
    font-family: ${ fonts.poppinsRegular };
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .p-0 {
    padding: 0 !important;
  }

  @media ${ Sizes.md }{
    .md-p-0 {
      padding: 0 !important;
    }
  }
`;