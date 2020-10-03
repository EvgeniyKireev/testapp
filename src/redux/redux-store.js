import { createStore, combineReducers } from "redux";
import {pubReducer} from "./publication-reducer";

let reducers = combineReducers({
    publication: pubReducer
});

const store = createStore(reducers);


window.store = store;

export default store;