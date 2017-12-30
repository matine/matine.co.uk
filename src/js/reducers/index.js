import _ from 'lodash';
import { combineReducers } from 'redux';
import * as actions from '../constants/actions';

export const content = (state = {
    global: null,
    projects: [],
}, action) => {
    switch (action.type) {
        case actions.SET_CONTENT_STATE:
            return _.assign({}, state, action.data);
        default:
            return state;
    }
};

const reducers = combineReducers({
    content,
});

export default reducers;
