import styled, { css } from 'styled-components'
import { space, fontWeight, fontSize, textAlign } from 'styled-system'
import { textStyles, colors, fontWeights, fontSizes, breakpoints } from '../../ui/theme'

export const TextWrap = styled.div`
    ${ space }
    ${ fontWeight }
    ${ fontSize }
    ${ textAlign }
    ${ props => props.caps && css`
        ${ textStyles.caps }
    ` }
    ${ props => props.color === 'light' && css`
        color: ${ colors.gray[2] }
    ` }
    ${ props => props.headings && css`
        h2,
        h3,
        h4,
        h5,
        h6 {
            ${ textStyles.headings }
            font-weight: ${ fontWeights.bold };
        }
        h2 {
            font-size: ${ fontSizes[4] }
            @media (min-width: ${ breakpoints[1] }) {
                font-size: ${ fontSizes[5] }
            }
        }
        h3 {
            font-size: ${ fontSizes[3] }
            @media (min-width: ${ breakpoints[1] }) {
                font-size: ${ fontSizes[4] }
            }
        }
        h4 {
            font-size: ${ fontSizes[2] }
            @media (min-width: ${ breakpoints[1] }) {
                font-size: ${ fontSizes[3] }
            }
        }
        h4,
        h5,
        h6 {
            font-size: ${ fontSizes[1] }
            @media (min-width: ${ breakpoints[1] }) {
                font-size: ${ fontSizes[1] }
            }
        }
    ` }
    ${ props => props.textSpacing && css`
        p {
            margin-bottom: 1em;
            &:last-child {
                margin-bottom: 0;
            }
        }
    ` }
    ${ props => props.listStyle === 'none' && css`
        ul {
            padding: 0;
            margin: 0;
        }
        li {
            list-style: none;
            padding-left: 0;
            padding-bottom: .5em;
        }
    ` }
    ${ props => props.listStyle === 'default' && css`
        li {
            list-style: circle;
        }
    ` }
    ${ props => props.linkStyle === 'default' && css`
        a {
            border-bottom: 1px dashed ${ colors.text };
            &:hover {
                border-bottom-color: ${ colors.highlight };
            }
        }
    ` }
    ${ props => props.linkStyle === 'none' && css`
        a {
            font-weight: inherit;
            border-bottom: none;
    
            &:hover {
                color: inherit;
            }
        }
    ` }
`

export const TextWrapXs = styled(TextWrap)``

TextWrapXs.defaultProps = {
    fontSize: ['10px', fontSizes[1]],
}

export const TextWrapSm = styled(TextWrap)``

TextWrapSm.defaultProps = {
    fontSize: [fontSizes[1], fontSizes[2]],
}

export const TextWrapMd = styled(TextWrap)``

TextWrapMd.defaultProps = {
    fontSize: [fontSizes[2], fontSizes[3]],
}

export const TextWrapLg = styled(TextWrap)``

TextWrapLg.defaultProps = {
    fontSize: [fontSizes[3], fontSizes[4]],
}

export const TextWrapXl = styled(TextWrap)``

TextWrapXl.defaultProps = {
    fontSize: [fontSizes[4], fontSizes[5]],
}

export default TextWrap
