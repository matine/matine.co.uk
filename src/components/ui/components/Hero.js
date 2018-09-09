import styled, { css } from 'styled-components';
import { color, space, fontWeight } from 'styled-system';
import { fontSizesResp, breakpoints, colors, spacePx, fontWeights, textStyles } from '../../../styles/theme';

const Hero = styled.div`
    ${color}
    ${space}
    ${fontWeight}
    ${textStyles.headings}
    ${props => props.size && css`
        font-size: ${fontSizesResp[props.size][0]};

        @media (min-width: ${breakpoints[2]}) {
            font-size: ${fontSizesResp[props.size][1]};
        }
    `}
`

export default Hero;
