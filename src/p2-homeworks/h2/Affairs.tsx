import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

export type AffairsPropsType = { // need to fix any
  data: Array<AffairType>
  filter: FilterType
  setFilter: (filter: FilterType) => void
  deleteAffairCallback: (id: number) => void
}

function Affairs(props: AffairsPropsType) {
  const {filter} = props

  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair // should work
      key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ))

  const setAll = () => {
    props.setFilter('all')
  }
  const setHigh = () => {
    props.setFilter('high')
  }
  const setMiddle = () => {
    props.setFilter('middle')
  }
  const setLow = () => {
    props.setFilter('low')
  }

  return (
    <div className={s.affair}>

      {mappedAffairs}

      <SuperButton className={`${s.affairButton} ${filter === 'all' ? s.activeFilter : ''}`}
                   onClick={setAll}>All
      </SuperButton>
      <SuperButton className={`${s.affairButton} ${filter === 'high' ? s.activeFilter : ''}`}
                   onClick={setHigh}>High
      </SuperButton>
      <SuperButton className={`${s.affairButton} ${filter === 'middle' ? s.activeFilter : ''}`}
                   onClick={setMiddle}>Middle
      </SuperButton>
      <SuperButton className={`${s.affairButton} ${filter === 'low' ? s.activeFilter : ''}`}
                   onClick={setLow}>Low
      </SuperButton>
    </div>
  )
}

export default Affairs
