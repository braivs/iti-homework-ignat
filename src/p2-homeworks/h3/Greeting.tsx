import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
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


  const inputClass = error ? s.error : ''

  return (
    <div>
      <SuperInputText name={name}
                      onChange={setNameCallback}
                      onKeyPress={addUserKeyCallback}
                      className={inputClass}
      />
      <span>{error}</span>
      <SuperButton disabled={!!inputClass} onClick={addUser}>add</SuperButton>
      <span>{totalUsers}</span>
    </div>
  )
}

export default Greeting
