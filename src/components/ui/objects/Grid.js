import styled from 'styled-components';
import Box from './Box';
import { width } from 'styled-system';
import { space } from '../../../styles/theme';

export const Grid = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    margin: ${props => `-${space[props.gutter]}px`};
`

Grid.defaultProps = {
    gutter: 3,
}

export const Col = styled(Box)`
    ${width}
    padding: ${props => `${space[props.gutter]}px`};
`

Col.defaultProps = {
    gutter: 3,
}