import PropTypes from 'prop-types';
import { HeadingStyled } from './_styled';

const Heading = HeadingStyled;

Heading.propTypes = {
    size: PropTypes.string,
};

Heading.defaultProps = {
    size: 3,
};

export default Heading;
