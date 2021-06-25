import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './Clock.module.scss'

function Clock() {
  const [timerId, setTimerId] = useState<number>(0)
  const [date, setDate] = useState<Date>(new Date())
  const [show, setShow] = useState<boolean>(false)

  const stop = () => {
    clearTimeout(timerId);
  }
  const start = () => {
    stop()
    const id: number = +setInterval(() => {
      setDate(new Date())
    }, 1000)
    setTimerId(id)
  }

  const onMouseEnter = () => {
    setShow(true)
  }
  const onMouseLeave = () => {
    // close
    setShow(false)

  }

  const stringTime = date.toLocaleTimeString() // fix with date
  const stringDate = date.toLocaleDateString() // fix with date

  return (
    <div className={s.clock}>
      <div className={s.timeDateContainer}>
        <div className={s.two}
             onMouseEnter={onMouseEnter}
             onMouseLeave={onMouseLeave}
        >
          {stringTime}
        </div>

        {show && (
          <div>
            {stringDate}
          </div>
        )}
      </div>
      <div className={s.buttonContainer}>
        <SuperButton onClick={start}>start</SuperButton>
        <SuperButton onClick={stop}>stop</SuperButton>
      </div>
    </div>
  )
}

export default Clock
