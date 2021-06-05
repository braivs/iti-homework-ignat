import React, {useState} from 'react'
import {CheckAC, homeWorkReducer, SortNameDownAC, SortNameUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {UserType} from './bll/tests/homeWorkReducer.test';
import s from './HW8.module.scss'

// export type UserType =

const initialPeople = [
  {_id: 0, name: 'Кот', age: 3},
  {_id: 1, name: 'Александр', age: 66},
  {_id: 2, name: 'Коля', age: 16},
  {_id: 3, name: 'Виктор', age: 44},
  {_id: 4, name: 'Дмитрий', age: 40},
  {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
  const [people, setPeople] = useState<Array<UserType>>(initialPeople)

  const finalPeople = people.map((p: UserType) => (
    <div className={s.container} key={p._id}>
      <span>{p.name}</span>
      <span>{p.age}</span>
    </div>
  ))

  const sortUp = () => setPeople(homeWorkReducer(initialPeople, SortNameUpAC()))
  const sortDown = () => setPeople(homeWorkReducer(initialPeople, SortNameDownAC()))
  const check18 = () => setPeople(homeWorkReducer(initialPeople, CheckAC()))

  return (
    <div>
      <hr/>
      homeworks 8

      {/*should work (должно работать)*/}
      {finalPeople}
      <div className={s.buttonsContainer}>
        <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
        <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
        <div><SuperButton onClick={check18}>check 18</SuperButton></div>
      </div>

      <hr/>
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativePeople/>*/}
      <hr/>
    </div>
  )
}

export default HW8
