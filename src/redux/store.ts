import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/userReducer';


export const store = configureStore({
    reducer: {
        users: usersReducer
    }
})

export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>











/*
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';



const rootReducer = combineReducers({
    user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>




export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type AppDispatch = typeof store.dispatch
*/