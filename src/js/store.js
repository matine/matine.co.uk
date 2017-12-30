import { createStore } from 'redux';
import reducers from './reducers';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(
    reducers,
    persistedState
);

store.subscribe(() => {
    saveState({
        content: store.getState().content
    });
})

export default store;
