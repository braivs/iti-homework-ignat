import React from 'react'
import {CheckAC, homeWorkReducer, SortNameDownAC, SortNameUpAC} from '../homeWorkReducer'

export type UserType = {
    _id: number
    name: string
    age: number
}

let initialState: UserType[]

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, SortNameUpAC())
    console.log(newState)
    const result = [ 1, 3, 4, 5, 2, 0 ]
      .filter((el, i) => el === newState[i]._id)
    expect(result.length).toBe(newState.length)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, SortNameDownAC())
    console.log(newState)
    const result = [ 0, 2, 5, 4, 3, 1 ]
      .filter((el, i) => el === newState[i]._id)
    expect(result.length).toBe(newState.length)
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, CheckAC())
    console.log(newState)
    const result = [ 1, 3, 4, 5 ]
      .filter((el, i) => el === newState[i]._id)
    expect(result.length).toBe(newState.length)
})
