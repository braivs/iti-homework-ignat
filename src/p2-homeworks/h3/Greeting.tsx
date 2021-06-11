import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.scss'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type GreetingPropsType = {
  name: string
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
  addUserKeyCallback: (e: KeyboardEvent<HTMLInputElement>) => void
  addUser: () => void
  error: string
  totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  {name, setNameCallback, addUserKeyCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {


  // const inputClass = error ? s.errorInput : s.input

  return (
    <div className={s.greetingBox}>
      <div className={s.addBox}>
        <SuperInputText value={name}
                        onChange={setNameCallback}
                        onKeyPress={addUserKeyCallback}
                        error={error}
                        spanClassName={s.spanError}
        />
        {/*<span className={s.spanError}>{error}</span>*/}
      </div>
      <SuperButton disabled={!!error} onClick={addUser} className={s.addButton}>add</SuperButton>
      <span>{totalUsers}</span>
    </div>
  )
}

export default Greeting
