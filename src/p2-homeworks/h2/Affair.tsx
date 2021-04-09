import React from 'react'

type AffairPropsType = {
    // key не нужно типизировать
    affair: any // need to fix any
    deleteAffairCallback: (value: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {}// need to fix

    return (
        <div>
          <span>{props.affair.name}</span>
          <span>{`[${props.affair.priority}]`}</span>
          <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
