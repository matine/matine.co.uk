import * as actions from '../constants/actions';

/**
 * Sets the CONTENT state.
 *
 * @param {Object} content
 * @return {Object}
 */
export const setContentState = content => {
    return {
        type: actions.SET_CONTENT_STATE,
        data: content,
    };
}
