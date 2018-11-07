import styled, { css } from 'styled-components'
import { space, fontWeight, fontSize, textAlign } from 'styled-system'
import { textStyles, fontSizes, colors } from '../../ui/theme'

const Text = styled.p`
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

export const TextXs = styled(Text)``

TextXs.defaultProps = {
    fontSize: [fontSizes[1], fontSizes[1]],
}

export const TextSm = styled(Text)``

TextSm.defaultProps = {
    fontSize: [fontSizes[1], fontSizes[2]],
}

export const TextMd = styled(Text)``

TextMd.defaultProps = {
    fontSize: [fontSizes[2], fontSizes[3]],
}

export const TextLg = styled(Text)``

TextLg.defaultProps = {
    fontSize: [fontSizes[3], fontSizes[4]],
}

export const TextXl = styled(Text)``

TextXl.defaultProps = {
    fontSize: [fontSizes[4], fontSizes[5]],
}

export default Text
