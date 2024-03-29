import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { colors } from '../theme'

const CarouselWrap = styled.div`
  .slick-dots {
    top: -60px !important;

    li {
      button {
        cursor: pointer;
        width: 20px;
        height: 20px;

        &:before {
          font-size: 16px !important;
          opacity: 1 !important;
          color: ${colors.gray[2]}!important;
        }

        &:focus {
          &:before {
            color: $grey !important;
          }
        }

        &:hover,
        &:active {
          &:before {
            color: ${colors.primary}!important;
          }
        }
      }

      &.slick-active {
        button {
          &:before {
            color: ${colors.primary}!important;
          }
        }
      }
    }
  }
`

export default CarouselWrap
