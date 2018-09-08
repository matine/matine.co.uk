import styled from 'styled-components';
import { color, bg, space, maxWidth } from 'styled-system';

const Box = styled.div`
    ${color}
    ${bg}
    ${space}
    ${maxWidth}
    background-color: ${props => props.theme.colors.primary};
`

export default Box;