import React from 'react';
import PropTypes from 'prop-types';

const EmailIcon = ({
    size,
}) => (
    <svg width={ size } height={ size } viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
        <path d="M460,86.3H39.8c-17.6,0-32,14.4-32,32v257c0,17.6,14.4,32,32,32H460c17.6,0,32-14.4,32-32v-257C492,100.7,477.7,86.3,460,86.3z M424.7,126.3l-175.6,147l-166.2-147H424.7z M47.8,367.3V151.8l175.8,155.4c6.8,6,15.9,9.4,25.6,9.4c9.7,0,18.8-3.3,25.6-9.4L452,155v212.3H47.8z"/>
    </svg>
);

EmailIcon.defaultProps = {
    size: 30,
};

EmailIcon.propTypes = {
    size: PropTypes.number,
};

export default EmailIcon;
