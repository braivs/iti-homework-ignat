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
      <svg className={s.messageCorner} xmlns="http://www.w3.org/2000/svg">
        <path fill="#1A1C27" d="M 0 20 A 20 20, 0, 0, 0, 20 0 L 20 20 Z"></path>
      </svg>
      <div className={s.messageBody}>
        <div className={s.leftPart}>
          <div className={s.messageName}>{props.name}</div>
          <div className={s.messageText}>{props.message}</div>
        </div>
        <div className={s.messageTime}>{props.time}</div>

      </div>
    </div>
  )
}

export default Message
