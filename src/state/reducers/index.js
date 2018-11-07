import { combineReducers } from 'redux'
import * as actions from '../../constants/actions'

const initialState = {
    theme: 'default',
}

export const theme = (state = initialState.theme, action) => {
    switch (action.type) {
    case actions.SET_THEME:
        return action.theme

    default:
        return state
    }
}

const reducers = combineReducers({
    theme,
})

export default reducers
