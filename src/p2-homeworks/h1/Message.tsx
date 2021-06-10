import React from 'react'
import s from './Message.module.scss'

type messageDataType = {
  avatar: string
  name: string
  message: string
  time: string
}

function Message(props: messageDataType) {
  return (
    <div className={s.message}>
      <img src={props.avatar} alt="" className={s.avatar}/>

      <div className={s.angel}></div>

      <div className={s.content}>
        <div className={s.leftPart}>
          <div className={s.name}>{props.name}</div>
          <div className={s.text}>{props.message}</div>
        </div>
        <div className={s.time}>{props.time}</div>

      </div>
    </div>
  )
}

export default Message
