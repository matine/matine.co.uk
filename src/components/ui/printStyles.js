import { css } from 'styled-components'

const printStyles = css`
    @media print {
        @page {
            size: auto!important;
            margin: 0mm!important;
            overflow: auto!important;
        }
        body {
            margin: 0mm 0mm 0mm 0mm!important;
        }
        .no-border-for-print {
            border-width: 0!important;
        }
        .hide-for-print {
            display: none!important;
        }
        .no-margin-for-print {
            margin: 0!important;
            padding: 0!important;
        }
        .cv-section {
            margin-bottom: 40px;
        }
        .cv-section__heading {
            margin-bottom: 1em;
            &:before {
                display: none;
            }
        }
    }
`

export default printStyles
