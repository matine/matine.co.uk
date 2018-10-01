import styled from 'styled-components';
import { color, space, maxWidth, minHeight, display, position, zIndex, top, right, bottom , left, width, flex, justifySelf, alignSelf } from 'styled-system';

const Box = styled.div`
    ${color}
    ${space}
    ${width}
    ${maxWidth}
    ${minHeight}
    ${display}
    ${position}
    ${zIndex}
    ${top}
    ${right}
    ${bottom}
    ${left}
    ${flex}
    ${alignSelf}
    ${justifySelf}
`

export default Box;