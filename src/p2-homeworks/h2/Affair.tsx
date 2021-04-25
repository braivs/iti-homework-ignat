import React from 'react'
import {AffairType} from './HW2';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import s from './Affair.module.scss'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (value: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix
    let priorityClass;
    if (props.affair.priority === 'high') priorityClass = `${s.high}`
    if (props.affair.priority === 'middle') priorityClass = `${s.middle}`

    return (
        <div className={s.affairContainer}>
            <div>{props.affair.name}</div>
            <div className={priorityClass}>{`[${props.affair.priority}]`}</div>
            <SuperButton onClick={deleteCallback} className={s.delButton}>X</SuperButton>
        </div>
    )
}

export default Affair
