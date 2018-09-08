import PropTypes from 'prop-types';
import { HeadingDecoratedStyled } from './_styled';

const HeadingDecorated = HeadingDecoratedStyled;

HeadingDecorated.propTypes = {
    size: PropTypes.string,
};

HeadingDecorated.defaultProps = {
    size: 3,
};

export default HeadingDecorated;
