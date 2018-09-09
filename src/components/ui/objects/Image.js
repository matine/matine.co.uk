import styled from 'styled-components';
import { width, maxWidth, display, position, top, right, bottom, left, zIndex } from 'styled-system';

const Image = styled.img`
    ${width}
    ${maxWidth}
    ${display}
    ${position}
    ${zIndex}
    ${top}
    ${right}
    ${bottom}
    ${left}
`

export default Image;
