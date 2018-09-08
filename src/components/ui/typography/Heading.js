import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontSizesResp } from '../../../styles/theme';
import { color, fontSize, space, fontWeight } from 'styled-system';

const HeadingStyled = styled.h2`
    ${color}
    ${space}
    ${fontSize}
    ${fontWeight}
`
const Heading = ({
    size,
    ...props
}) => (
    <HeadingStyled
        { ...props }
        fontSize={ fontSizesResp[size] }
    />
);

Heading.propTypes = {
    size: PropTypes.shape(),
};

Heading.defaultProps = {
    size: 'md',
};

export default Heading;
