import styled, { css } from 'styled-components';
import { space, fontWeight, fontSize, textAlign } from 'styled-system';
import { textStyles, colors, fontWeights, fontSizes  } from '../../../styles/theme';

export const TextWrap = styled.div`
    ${space}
    ${fontWeight}
    ${fontSize}
    ${textAlign}
    ${props => props.caps && css`
        ${textStyles.caps}
    `}
    ${props => props.color === 'light' && css`
        color: ${colors.gray[2]}
    `}
    h2,
    h3,
    h4,
    h5,
    h6 {
        ${textStyles.headings}
        font-weight: ${fontWeights.bold};
    }
    li {
        list-style: circle;
    }
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
    ${props => props.linkStyle === 'none' && css`
        a {
            color: inherit;
            font-weight: inherit;
            text-decoration: none;
            border-bottom: none;
        }
    `}
`

export const TextWrapXs = styled(TextWrap)``

TextWrapXs.defaultProps = {
    fontSize: [fontSizes[0], fontSizes[1]],
};

export const TextWrapSm = styled(TextWrap)``

TextWrapSm.defaultProps = {
    fontSize: [fontSizes[1], fontSizes[2]],
};

export const TextWrapMd = styled(TextWrap)``

TextWrapMd.defaultProps = {
    fontSize: [fontSizes[2], fontSizes[3]],
};

export const TextWrapLg = styled(TextWrap)``

TextWrapLg.defaultProps = {
    fontSize: [fontSizes[3], fontSizes[4]],
};

export const TextWrapXl = styled(TextWrap)``

TextWrapXl.defaultProps = {
    fontSize: [fontSizes[4], fontSizes[5]],
};

export default TextWrap;
