export type initStateType = {
    isLoading: boolean
}

const initState: initStateType = {
    isLoading: false
};

type LoadingActionType = {
    type: 'CHANGE-IS-LOADING'
    isLoading: boolean
}

export const loadingReducer = (state: initStateType = initState, action: LoadingActionType): initStateType => {
    switch (action.type) {
        case "CHANGE-IS-LOADING": {
           return {...state, isLoading: action.isLoading}
        }
        default: return state;
    }
};

export const loadingAC = (newValue: boolean): LoadingActionType => {
    return {type: "CHANGE-IS-LOADING", isLoading: newValue}
};