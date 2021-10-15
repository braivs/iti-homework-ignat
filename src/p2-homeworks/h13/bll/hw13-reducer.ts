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
            debugger
            dispatch(showInfoAndErrorAC(res.data.info, res.data.errorText))
            console.log(res)
        })
        .catch(res => {
            debugger

            if (res.message) {
                dispatch(showInfoAndErrorAC('123', '12345'))

                return;
            }

            // console.log(1, error.message)
            // console.log(1, error.errorText)
            // console.log(1, error.info)
            // console.log(1, error.yourBody)
            // console.log(1, error.yourQuery)
            // debugger
            // dispatch(showInfoAndErrorAC(error.data.info, error.data.errorText))
        })
}

type InitialStateType = {
    info: string
    errorText: string
}
type ActionType = ReturnType<typeof showInfoAndErrorAC>