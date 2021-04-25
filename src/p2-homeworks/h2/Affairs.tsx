import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

export type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType)=> void
    deleteAffairCallback: (value: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')}
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div className={s.someClass}>

            {mappedAffairs}

            <SuperButton className={s.affairButton} onClick={setAll}>All</SuperButton>
            <SuperButton className={s.affairButton} onClick={setHigh}>High</SuperButton>
            <SuperButton className={s.affairButton} onClick={setMiddle}>Middle</SuperButton>
            <SuperButton className={s.affairButton} onClick={setLow}>Low</SuperButton>
        </div>
    )
}

export default Affairs
