import React from 'react';
import { BoxStyled } from './_styled';

const Container = ({...props }) => (
    <BoxStyled
        { ...props }
        px={[ 3, 4 ]}
        mx="auto"
        maxWidth={ 1100 }
    />
);

export default Container;
