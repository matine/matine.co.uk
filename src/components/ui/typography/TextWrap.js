import PropTypes from 'prop-types';
import { TextWrapStyled } from './_styled';

const TextWrap = TextWrapStyled;

TextWrap.propTypes = {
    size: PropTypes.string,
    listStyle: PropTypes.string,
};

TextWrap.defaultProps = {
    size: 2,
    listStyle: 'default',
};

export default TextWrap;
