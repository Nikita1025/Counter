import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {countReducer} from "./countReducer";
import thunk from "redux-thunk";
import {loadState, saveState} from "../utils/localstorage-util";

const rootRedue = combineReducers({
    count: countReducer
})

export const state = legacy_createStore(rootRedue, loadState(), applyMiddleware(thunk))

export type AppRootStateType = ReturnType<typeof rootRedue>
state.subscribe(() => {
    saveState(state.getState())
})

// @ts-ignore
// window.store = state