import {API} from "../api/request-api";
import {Dispatch} from "redux";

const initialState: InitialStateType = {
    info: '',
    errorText: ''
}

export const hw13Reducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case "hw13/SHOW-INFO-AND-ERROR":
            return {...state, info: action.infoText, errorText: action.errorText}
        default:
            return state
    }
}


export const showInfoAndErrorAC = (infoText: string, errorText: string) =>
    ({type: 'hw13/SHOW-INFO-AND-ERROR', infoText, errorText} as const)

export const requestTC = (value: boolean) => (dispatch: Dispatch<ActionType>) => {
    API.request(value)
        .then(res => {
            dispatch(showInfoAndErrorAC(res.data.info, res.data.errorText))
            console.log(res)
        })
        .catch(error => {
            dispatch(showInfoAndErrorAC(error.response.data.info, error.response.data.errorText))
        })
}

type InitialStateType = {
    info: string
    errorText: string
}
type ActionType = ReturnType<typeof showInfoAndErrorAC>