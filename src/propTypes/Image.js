import PropTypes from 'prop-types'

export default PropTypes.oneOfType([
    PropTypes.shape({
        uri: PropTypes.string,
    }),
    PropTypes.number,
])
