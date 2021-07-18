import {loadingReducer} from "./loadingReducer";
import {combineReducers, createStore} from "redux";
import {colorThemeReducer} from "../../h11/bll/colorThemeReducer";

const reducers = combineReducers({
    loading: loadingReducer,
    colorTheme: colorThemeReducer,

});

export const store = createStore(reducers);

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
