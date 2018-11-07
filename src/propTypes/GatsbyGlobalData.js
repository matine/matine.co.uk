import PropTypes from 'prop-types'

export default PropTypes.shape({
    global: PropTypes.shape({
        edges: PropTypes.array.isRequired,
    })
})
