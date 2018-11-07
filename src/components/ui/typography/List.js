import styled, { css } from 'styled-components'
import { space, borders, colors } from '../../ui/theme'

const List = styled.ul`
    li {
        list-style: circle;
    }
    ${ props => props.listStyle === 'none' && css`
        padding: 0;
        margin: 0;
        li {
            list-style: none;
            padding-left: 0;
            padding-bottom: .5em;
        }
    ` }
    ${ props => props.listStyle === 'bordered' && css`
        padding: 0;
        margin: 0;
        li {
            list-style: none;
            padding-left: 0;
            padding-bottom: 1em;
            margin-bottom: 1em;
            border-bottom: ${ borders[1] };
            border-color: ${ colors.keyline }
        }
    ` }
    ${ props => props.listStyle === 'inline' && css`
        padding: 0;
        margin: ${ props => `-${ space[props.inlineGutter] }px;` }
        li {
            list-style: none;
            display: inline-block;
            margin: ${ props => `${ space[props.inlineGutter] }px;` }
            padding: 0;
        }
    ` }
`

List.defaultProps = {
    inlineGutter: 1,
}

export default List
