import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';

const loggerMiddleware = createLogger();

//TODO: LEMBRAR DE TIRAR O LOGGER DEPOIS DO DESENVOLVIMENTO
export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);