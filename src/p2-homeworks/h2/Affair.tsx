import React from 'react'
import {AffairType} from './HW2';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (value: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {props.deleteAffairCallback(props.affair._id)}// need to fix

    return (
        <div>
          {props.affair.name}
          {`[${props.affair.priority}]`}
          <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
