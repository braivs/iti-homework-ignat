export type initStateType = {
    color: string
}

const initState: initStateType = {
    color: 'dark'
};

type LoadingActionType = {
    type: 'CHANGE-COLOR-THEME'
    color: string
}

export const colorThemeReducer = (state: initStateType = initState, action: LoadingActionType): initStateType => {
    switch (action.type) {
        case "CHANGE-COLOR-THEME": {
           return {...state, color: action.color}
        }
        default: return state;
    }
};

export const colorAC = (newColor: string): LoadingActionType => {
    return {type: "CHANGE-COLOR-THEME", color: newColor}
};