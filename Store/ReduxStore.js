import {createStore, applyMiddleware, combineReducers} from "redux";
import React from 'react';
import reducers from "../Reducers/reducersExample";
console.log("this is the new page");
const mylogger = (store) => (next) => (action) => {
    console.log(store);
    console.log(next);
    console.log(action);
    next(action);
};
const initalState = {name: "ASd"};


const store = createStore( reducers, initalState, applyMiddleware(mylogger));

store.subscribe(function () {
    saveState(store.getState());
    console.log("store updated ", store.getState())
});

export default store;