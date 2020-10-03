import {createStore, combineReducers, applyMiddleware} from "redux";
import {pubReducer} from "./publication-reducer";
import thunkMiddleware from "redux-thunk";
let reducers = combineReducers({
    publication: pubReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));


window.store = store;

export default store;