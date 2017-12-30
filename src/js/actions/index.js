import * as actions from '../constants/actions';

/**
 * Sets the UI state.
 *
 * @param {Object} ui
 * @return {Object}
 */
export function setUiState(ui) {
    return {
        type: actions.SET_UI_STATE,
        data: ui,
    };
}
