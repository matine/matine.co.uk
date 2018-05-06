import { combineReducers } from 'redux';
import * as actions from '../../constants/actions';

const initialState = {
    ui: {
        isLoading: true,
        imgsLoading: false,
    },
    content: {
        global: null,
        projects: [],
    },
    theme: 'default',
};

export const ui = (state = initialState.ui, action) => {
    switch (action.type) {
        case actions.SET_IS_LOADING:
            return Object.assign({}, state, {
                isLoading: action.isLoading,
            });

        case actions.SET_IMGS_LOADING:
            return Object.assign({}, state, {
                imgsLoading: action.imgsLoading,
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

export const theme = (state = initialState.theme, action) => {
    switch (action.type) {
        case actions.SET_THEME:
            return action.theme;

        default:
            return state;
    }
};

const reducers = combineReducers({
    ui,
    content,
    theme,
});

export default reducers;
