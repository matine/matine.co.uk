import styled, { css } from 'styled-components';
import { color, space, fontWeight } from 'styled-system';
import { fontSizesResp, breakpoints, spacePx, fontWeights, textStyles, colors } from '../../../styles/theme';

export const HeadingStyled = styled.h2`
    ${textStyles.headings}
    ${space}
    ${fontWeight}
    ${props => props.size && css`
        font-size: ${fontSizesResp[props.size][0]};

        @media (min-width: ${breakpoints[2]}) {
            font-size: ${fontSizesResp[props.size][1]};
        }
    `}
    ${props => props.caps && css`
        ${textStyles.caps}
    `}
    ${props => props.color === 'light' && css`
        color: ${colors.gray[2]}
    `}
`

export const HeadingDecoratedStyled = styled(HeadingStyled)`
    ${textStyles.caps}
    position: relative;
    padding-bottom: 5px;
    margin-bottom: ${spacePx[4]};
    font-weight: ${fontWeights.regular};

    &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 18px;
        height: 5px;
        background-color: ${colors.primary};
    }
`

export const TextStyled = styled.p`
    ${color}
    ${space}
    ${fontWeight}
    ${props => props.size && css`
        font-size: ${fontSizesResp[props.size][0]};

        @media (min-width: ${breakpoints[2]}) {
            font-size: ${fontSizesResp[props.size][1]};
        }
    `}
    ${props => props.caps && css`
        ${textStyles.caps}
    `}
`

export const SpanStyled = styled.span`
    ${color}
    ${space}
    ${fontWeight}
`

export const TextWrapStyled = styled.div`
    ${color}
    ${space}
    ${fontWeight}
    h2,
    h3,
    h4,
    h5,
    h6 {
        ${textStyles.headings}
        font-weight: ${fontWeights.bold};
    }
    h2 {
        font-size: ${fontSizesResp[4][0]};

        @media (min-width: ${breakpoints[2]}) {
            font-size: ${fontSizesResp[4][1]};
        }
    }
    h3 {
        font-size: ${fontSizesResp[3][0]};

        @media (min-width: ${breakpoints[2]}) {
            font-size: ${fontSizesResp[3][1]};
        }
    }
    h4 {
        font-size: ${fontSizesResp[2][0]};

        @media (min-width: ${breakpoints[2]}) {
            font-size: ${fontSizesResp[2][1]};
        }
    }
    h5 {
        font-size: ${fontSizesResp[1][0]};

        @media (min-width: ${breakpoints[2]}) {
            font-size: ${fontSizesResp[1][1]};
        }
    }
    h6 {
        font-size: ${fontSizesResp[0][0]};

        @media (min-width: ${breakpoints[2]}) {
            font-size: ${fontSizesResp[0][1]};
        }
    }
    ${props => props.size && css`
        font-size: ${fontSizesResp[props.size][0]};

        @media (min-width: ${breakpoints[2]}) {
            font-size: ${fontSizesResp[props.size][1]};
        }
    `}
    ${props => props.listStyle === 'default' && css`
        li {
            list-style: circle;
        }
    `}
    ${props => props.listStyle === 'none' && css`
        ul {
            padding: 0;
            margin: 0;
        }
        li {
            list-style: none;
            padding-left: 0;
            padding-bottom: .5em;
        }
    `}
`