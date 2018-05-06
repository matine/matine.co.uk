import * as actions from '../../constants/actions';

/**
 * Sets IS LOADING.
 *
 * @param {Boolean} isLoading
 * @return {Object}
 */
export const setIsLoading = isLoading => ({
    type: actions.SET_IS_LOADING,
    isLoading,
});

/**
 * Sets images are loading.
 *
 * @param {Boolean} imgsLoading
 * @return {Object}
 */
export const setImgsLoading = imgsLoading => ({
    type: actions.SET_IMGS_LOADING,
    imgsLoading,
});

/**
 * Sets the CONTENT.
 *
 * @param {Object} content
 * @return {Object}
 */
export const setContent = content => ({
    type: actions.SET_CONTENT,
    content,
});

/**
 * Sets the theme.
 *
 * @param {Object} theme
 * @return {Object}
 */
export const setTheme = theme => ({
    type: actions.SET_THEME,
    theme,
});