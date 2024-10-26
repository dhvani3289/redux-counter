import { combineReducers, createStore } from "redux";
import { ContactReducers } from "./Reducers/ContactReducers";
import { CounterReducer } from "./Reducers/CounterReducers";

const rootReducer = combineReducers({
    counterRoot: CounterReducer,
    contactRoot: ContactReducers
})

const store = createStore(rootReducer);
export default store;