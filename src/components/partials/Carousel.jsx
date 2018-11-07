import PropTypes from 'prop-types'
import React from 'react'
import Slider from 'react-slick'
import { Contained } from '../ui'

const Carousel = ({
    items,
}) => {
    const settings = {
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        fade: true,
        focusOnSelect: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        speed: 1200,
        touchMove: true,
    }

    if (items === null) {
        return null
    }

    if (items.length < 2) {
        return (
            <Contained width={ 1 } maxWidth={ 5 }>
                { items[0] }
            </Contained>
        )
    }

    return (
        <Contained width={ 1 } maxWidth={ 5 }>
            <Slider { ...settings }>
                {
                    items.map(item => (
                        item
                    ))
                }
            </Slider>
        </Contained>
    )
}

Carousel.defaultProps = {
    items: null,
}

Carousel.propTypes = {
    items: PropTypes.arrayOf(PropTypes.node),
}

export default Carousel
