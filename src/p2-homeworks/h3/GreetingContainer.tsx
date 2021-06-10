import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
  users: Array<UserType>
  addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
  const [name, setName] = useState<string>('')
  const [error, setError] = useState<string>('')

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
    if (e.currentTarget.value.trim() !== '') setError('')
  }

  const addUserKeyCallback = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addUser()
    }
  }

  const addUser = () => {
    if (name.trim() === '') {
      setError('name is ruquire!')
    } else {
      alert(`Hello ${name.trim()} !`)
      addUserCallback(name.trim());
      setName('')
    }
  }

  const totalUsers = users.length

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      addUserKeyCallback={addUserKeyCallback}
      error={error}
      totalUsers={totalUsers}
    />
  )
}

export default GreetingContainer
