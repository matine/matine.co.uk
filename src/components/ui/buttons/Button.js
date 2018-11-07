import styled, { css } from 'styled-components'
import { space, fontWeight, fontSize, textAlign } from 'styled-system'
import { textStyles } from '../../ui/theme'

const Button = styled.button`
    color: inherit;
    appearance: none;
    background-color: transparent;
    border: 0;
    border-radius: 0;
    cursor: pointer;
    padding: 0;
    text-decoration: none;
    user-select: none;
    overflow: visible;
    &:focus {
        outline: none;
    }
    ${ space }
    ${ fontWeight }
    ${ fontSize }
    ${ textAlign }
    ${ props => props.caps && css`
        ${ textStyles.caps }
    ` }
`

export default Button
