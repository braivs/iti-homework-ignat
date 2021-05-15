import React, {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from 'react'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[]
  onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
  {
    options,
    onChange, onChangeOption,
    ...restProps
  }
) => {
  debugger
  const mappedOptions: any[] = options ? options.map((o, i) => (
    <option key={'option-' + i}>{o}</option>
  )) : []

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    // onChange, onChangeOption
  }

  return (
    <select onChange={onChangeCallback} {...restProps}>
      {mappedOptions}
    </select>
  )
}

export default SuperSelect
