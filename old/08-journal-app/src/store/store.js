import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import { authReducer } from '../reducers/authReducer';
import { notesReducer } from '../reducers/notesReducer';
import { uiReducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const store = configureStore({
    reducer: {
        auth: authReducer,
        ui: uiReducer,
        notes: notesReducer
    }
},
composeEnhancers(
    applyMiddleware( thunk )
)
);