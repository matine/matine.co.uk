import PropTypes from 'prop-types'

export default PropTypes.shape({
    projects: PropTypes.shape({
        edges: PropTypes.array.isRequired,
    })
})
