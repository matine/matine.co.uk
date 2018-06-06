import React from 'react';
import PropTypes from 'prop-types';

const EmailIcon = ({
    size,
}) => (
    <svg width={ size } height={ size } viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <path d="M492.3,207.3c0.1-8.2-2.9-16.3-9-22.5l-0.8-0.8L271.7,13.1C259.6,2,241,2,228.9,13.1L17.2,184.6l-0.7,0.7c-7.4,7.4-10.4,17.7-8.8,27.3v252.1c0,17.4,14.1,31.5,31.5,31.5h422c17.4,0,31.5-14.1,31.5-31.5V207.3H492.3z M361.5,277.8l-112,90.8L138,278.3v-35.8h223.5V277.8z M143.4,332.8l-96.7,96.7v-175L143.4,332.8z M173.9,357.5l54.2,43.9c5.8,5.4,13.4,8.4,21.4,8.4c8,0,15.5-3,21.4-8.4l54.8-44.5l100.1,100.2H74.2L173.9,357.5z M356.2,332.3l97.5-79.1v176.7L356.2,332.3z M250.3,46l198.6,160.9l-48.4,39.3v-20.4c0-11.1-9.1-22.3-26.6-22.3H125.6c-17.4,0-26.6,11.2-26.6,22.3v20.9l-48.2-39.1L250.3,46z" />
    </svg>
);

EmailIcon.defaultProps = {
    size: 30,
};

EmailIcon.propTypes = {
    size: PropTypes.number,
};

export default EmailIcon;
