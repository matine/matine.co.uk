import { css } from 'styled-components'

const printStyles = css`
  @media print {
    @page {
      size: A4 portrait;
      margin: 8mm 10mm;
      overflow: auto !important;
    }
    body {
      margin: 0 !important;
    }
    .no-border-for-print {
      border-width: 0 !important;
    }
    .hide-for-print {
      display: none !important;
    }
    .print-inline-block {
      display: inline-block !important;
    }
    .no-margin-for-print {
      margin: 0 !important;
      padding: 0 !important;
    }
    .cv-logo-lockup {
      padding-bottom: 16px;
    }
    .cv-section {
      margin-bottom: 20px;
    }
    .cv-education-item,
    .cv-employment-item {
      margin-bottom: 18px;
    }
    .cv-section__heading {
      font-size: 16px;
      display: inline-block;
      margin-bottom: 10px;
      padding-bottom: 2px;
      border-bottom: 1px double #ececec;
      &::before {
        display: none;
      }
    }
    .cv-contained {
      margin: 0 !important;
      padding: 0 !important;
    }
    .cv-inner {
      margin: 0 !important;
      padding: 0 !important;
    }
    h1,
    h2,
    h3,
    h4,
    h5 {
      page-break-after: avoid;
    }
  }
`

export default printStyles
