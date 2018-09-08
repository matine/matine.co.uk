import styled from 'styled-components';
import theme from 'styled-theming';
import { colors } from '../../../styles/theme';

const color = theme("mode", {
    default: colors.text,
    inverted: colors.primary,
});

const backgroundColor = theme("mode", {
    default: colors.gray[0],
    inverted: colors.primary,
});

const AppWrap = styled.div`
    color: ${color};
    background-color: ${backgroundColor};
`;

export default AppWrap;
