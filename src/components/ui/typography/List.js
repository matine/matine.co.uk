import styled, { css } from 'styled-components';
import { space } from '../../../styles/theme';

const List = styled.ul`
    li {
        list-style: circle;
    }
    ${props => props.linkStyle === 'none' && css`
        padding: 0;
        margin: 0;
        li {
            list-style: none;
            padding-left: 0;
            padding-bottom: .5em;
        }
    `}
    ${props => props.linkStyle === 'inline' && css`
        padding: 0;
        margin: ${props => `-${space[props.inlineGutter]}px;`}
        li {
            list-style: none;
            display: inline-block;
            margin: ${props => `${space[props.inlineGutter]}px;`}
            padding: 0;
        }
    `}
`

List.defaultProps = {
    inlineGutter: 1,
};

export default List;
