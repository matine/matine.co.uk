import { css } from 'styled-components'

const printStyles = css`
  @media print {
    @page {
      size: A4 portrait;
      margin: 8mm 30mm 8mm 10mm;
      overflow: auto !important;
    }
    body {
      margin: 0 !important;
      border-left: 1px solid #eee;
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
    .cv-intro-text p,
    .cv-interests-text p {
      margin-bottom: 10px;
    }
    .cv-intro-text,
    .cv-skills-text,
    .cv-interests-text,
    .cv-employment-desc,
    .cv-education-desc,
    .cv-employment-date,
    .cv-employment-title,
    .cv-education-date,
    .cv-education-title {
      font-size: 12px;
    }
    .cv-employment-date,
    .cv-education-date {
      color: #eee;
      margin-bottom: 4px;
    }
    .cv-employment-title {
      margin-bottom: 4px;
    }
    .cv-section {
      margin-bottom: 26px;
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
      border-bottom: 1px double #eee;
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
