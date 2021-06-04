import {UserType} from './tests/homeWorkReducer.test';

type SortNameUpActionType = {
  type: 'sort'
  payload: 'up'
}
type SortNameDownActionType = {
  type: 'sort'
  payload: 'down'
}
type CheckActionType = {
  type: 'check'
  payload: 18
}
type ActionType = SortNameUpActionType | SortNameDownActionType | CheckActionType

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => {
  switch (action.type) {
    case 'sort': {
      switch (action.payload) {
        case 'up':
          let stateCopy = [...state]
          stateCopy.sort((a, b) => b.name > a.name ? -1 : 1)
          return stateCopy
        case 'down':
          let stateCopy2 = [...state]
          stateCopy2.sort((a, b) => b.name > a.name ? -1 : 1).reverse()
          return stateCopy2
        default:
          return state
      }
    }
    case 'check': {
      return state.filter(el => el.age >= 18)
    }
    default:
      return state
  }
}

export const SortNameUpAC = ():SortNameUpActionType => {
  return { type: 'sort', payload: 'up' }
}
export const SortNameDownAC = ():SortNameDownActionType => {
  return { type: 'sort', payload: 'down' }
}
export const CheckAC = ():CheckActionType => {
  return { type: 'check', payload: 18 }
}