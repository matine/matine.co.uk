import PropTypes from 'prop-types';
import { TextStyled } from './_styled';

const Text = TextStyled;

Text.propTypes = {
    size: PropTypes.string,
};

Text.defaultProps = {
    size: 2,
};

export default Text;
