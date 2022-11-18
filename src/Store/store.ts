import {combineReducers, legacy_createStore} from "redux";
import {countReducer} from "./countReducer";

const rootRedue = combineReducers({
    count: countReducer
})
export const state=legacy_createStore(rootRedue)
export type AppRootStateType= ReturnType<typeof rootRedue>


// @ts-ignore
// window.store = state