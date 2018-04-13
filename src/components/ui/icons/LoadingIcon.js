import React from 'react';
import PropTypes from 'prop-types';

const LoadingIcon = ({
    colour,
}) => (
    <svg className="loading-icon rotating" width="100%" height="100%" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M249.5 490.3c-64 0-124.3-24.9-169.5-70.2C34.7 374.8 9.7 314.6 9.7 250.5S34.7 126.3 80 81s105.5-70.2
                169.5-70.2S373.8 35.7 419.1 81s70.2 105.5 70.2 169.5-24.9 124.3-70.2 169.5c-45.3 45.3-105.5 70.3-169.6
                70.3zm0-431.6c-105.7 0-191.8 86-191.8 191.8 0 105.7 86 191.8 191.8 191.8 105.7 0 191.8-86 191.8-191.8 0-105.7-86-191.8-191.8-191.8z"
            fill={ colour }
            opacity=".3"
        />
        <path
            d="M489.3 250.5h-48c0-105.7-86-191.8-191.8-191.8v-48c64 0 124.3 24.9 169.5 70.2 45.3 45.4 70.3 105.6 70.3 169.6z"
            fill={ colour }
        />
    </svg>
);

LoadingIcon.defaultProps = {
    colour: '#fff',
};

LoadingIcon.propTypes = {
    colour: PropTypes.string,
};

export default LoadingIcon;
