import styled from 'styled-components';
import { width } from 'styled-system';
import { colors } from '../../../styles/theme';

const SvgWrap = styled.div`
    ${width}
    svg path {
        fill: ${props => `${colors[props.color]}`}
    }
`

SvgWrap.defaultProps = {
    color: 'text',
}

export default SvgWrap;