import { combineReducers } from 'redux';
import * as actions from '../../constants/actions';

const initialState = {
    ui: {
        isLoading: true,
    },
    content: {
        global: null,
        projects: [],
    },
};

export const ui = (state = initialState.ui, action) => {
    switch (action.type) {
        case actions.SET_IS_LOADING:
            return Object.assign({}, state, {
                isLoading: action.isLoading,
            });

        default:
            return state;
    }
};

export const content = (state = initialState.content, action) => {
    switch (action.type) {
        case actions.SET_CONTENT:
            return Object.assign({}, state, action.content);

        default:
            return state;
    }
};

const reducers = combineReducers({
    ui,
    content,
});

export default reducers;
