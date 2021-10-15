import {loadingReducer} from "./loadingReducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import {colorThemeReducer} from "../../h11/bll/colorThemeReducer";
import thunkMiddleware from "redux-thunk";
import {hw13Reducer} from "../../h13/bll/hw13-reducer";

const reducers = combineReducers({
    loading: loadingReducer,
    colorTheme: colorThemeReducer,
    hw13: hw13Reducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
