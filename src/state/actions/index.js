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
 * Sets the CONTENT.
 *
 * @param {Object} content
 * @return {Object}
 */
export const setContent = content => ({
    type: actions.SET_CONTENT,
    content,
});
