import styled from 'styled-components';
import Box from './Box';
import { containerWidths } from '../../../styles/theme';

const Contained = styled(Box)`
    max-width: ${props => `${containerWidths[props.maxWidth]}px`}
`
Contained.defaultProps = {
    mx: 'auto',
    maxWidth: 3,
}

export default Contained;