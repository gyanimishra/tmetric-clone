import {
    applyMiddleware,
    combineReducers,
    legacy_createStore,
    compose,
} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './auth/reducer';
import { projectReducer } from './project/reducer';

const rootReducer = combineReducers({ project: projectReducer, auth: authReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);