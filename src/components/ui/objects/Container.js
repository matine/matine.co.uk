import React from 'react';
import { Box } from '../../ui';

const Container = ({ ...props }) => (
    <Box
        { ...props }
        px={[ 3, 4 ]}
        mx="auto"
        maxWidth={ 1100 }
    />
);

export default Container;
