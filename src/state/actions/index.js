import * as actions from '../../constants/actions'

/**
 * Sets the theme.
 *
 * @param {Object} theme
 * @return {Object}
 */
export const setTheme = theme => ({
    type: actions.SET_THEME,
    theme,
})
