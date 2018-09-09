import styled, { css } from 'styled-components';
import { space, fontWeight, fontSize, textAlign, lineHeight } from 'styled-system';
import { textStyles, fontSizes, colors } from '../../../styles/theme';

const Heading = styled.h2`
    ${textStyles.headings}
    ${space}
    ${fontWeight}
    ${fontSize}
    ${textAlign}
    ${lineHeight}
    ${props => props.caps && css`
        ${textStyles.caps}
    `}
    ${props => props.color === 'light' && css`
        color: ${colors.gray[2]}
    `}
`

export const HeadingXs = styled(Heading)``

HeadingXs.defaultProps = {
    fontSize: ['10px', fontSizes[1]],
};

export const HeadingSm = styled(Heading)``

HeadingSm.defaultProps = {
    fontSize: [fontSizes[1], fontSizes[2]],
};

export const HeadingMd = styled(Heading)``

HeadingMd.defaultProps = {
    fontSize: [fontSizes[2], fontSizes[3]],
};

export const HeadingLg = styled(Heading)``

HeadingLg.defaultProps = {
    fontSize: [fontSizes[3], fontSizes[4]],
};

export const HeadingXl = styled(Heading)``

HeadingXl.defaultProps = {
    fontSize: [fontSizes[4], fontSizes[5]],
};

export default Heading;