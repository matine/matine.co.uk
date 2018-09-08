import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontSizesResp } from '../../../styles/theme';
import { color, fontSize, space, fontWeight } from 'styled-system';

const TextStyled = styled.p`
    ${color}
    ${space}
    ${fontSize}
    ${fontWeight}
`
const Text = ({
    size,
    ...props
}) => (
    <TextStyled
        { ...props }
        fontSize={ fontSizesResp[size] }
    />
);

Text.propTypes = {
    size: PropTypes.shape(),
};

Text.defaultProps = {
    size: 'md',
};

export default Text;
