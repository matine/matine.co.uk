import styled, { css } from 'styled-components'
import { space, fontSize, textAlign, lineHeight, display } from 'styled-system'
import { textStyles } from '../../ui/theme'

const PageHeading = styled.h1`
    ${ textStyles.headings }
    ${ space }
    ${ fontSize }
    ${ textAlign }
    ${ lineHeight }
    ${ display }
    ${ props => props.caps && css`
        ${ textStyles.caps }
    ` }
`

PageHeading.defaultProps = {
    fontSize: [26, 26, 30, 40],
    caps: true,
    textAlign: 'center',
    py: [5, 5, 6],
    lineHeight: 1,
}

export default PageHeading
