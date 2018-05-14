import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-slick';

class Carousel extends React.PureComponent {
    /**
     * Renders the component.
     *
     * @return {XML}
     */
    render() {
        const {
            items,
        } = this.props;

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
        };

        if (items === null) {
            return null;
        }

        if (items.length < 2) {
            return (
                items[0]
            );
        }

        return (
            <div className="m-centre max-width-screenshots width-100">
                <Slider { ...settings }>
                    {
                        items.map(item => (
                            item
                        ))
                    }
                </Slider>
            </div>
        );
    }
}

Carousel.defaultProps = {
    items: null,
};

Carousel.propTypes = {
    items: PropTypes.arrayOf(PropTypes.node),
};

export default Carousel;