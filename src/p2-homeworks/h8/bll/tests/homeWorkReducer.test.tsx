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
    const initialStateCopy = [...initialState]
    expect(newState).toEqual(
      initialStateCopy.sort((a,b) => b.name > a.name ? -1 : 1)
    )
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, SortNameDownAC())
    console.log(newState)
    const initialStateCopy = [...initialState]
    expect(newState).toEqual(
      initialStateCopy.sort((a,b) => b.name > a.name ? -1 : 1).reverse()
    )
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, CheckAC())
    console.log(newState)
    expect(newState).toEqual(
      initialState.filter(el => el.age >= 18)
    )
})
