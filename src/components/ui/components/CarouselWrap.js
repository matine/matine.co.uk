import styled from 'styled-components';
import slickCarousel from 'slick-carousel/slick/slick.css';
import slickCarouselTheme from 'slick-carousel/slick/slick-theme.css';
import { colors } from '../../ui/theme';

const CarouselWrap = styled.div`
    ${slickCarousel};
    ${slickCarouselTheme};

    .slick-dots {
        top: -40px !important;

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

export default CarouselWrap;
