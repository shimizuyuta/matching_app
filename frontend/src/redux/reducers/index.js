import React from 'react'
import { combineReducers,createStore } from 'redux';
import userReducers from './userReducer';

const rootReducer = combineReducers({
   users:userReducers,

});

const store = createStore(rootReducer);


export default store;
