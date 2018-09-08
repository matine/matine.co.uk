import React from 'react';
import { BoxStyled } from './_styled';
import { containerWidths } from '../../../styles/theme';

const Contained = ({
    ...props,
    maxWidth,
}) => (
    <BoxStyled
        { ...props }
        mx="auto"
        maxWidth={ containerWidths[maxWidth] }
    />
);

export default Contained;
