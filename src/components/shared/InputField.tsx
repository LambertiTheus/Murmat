import React from 'react'
import InputMask from 'react-input-mask'

interface CustomInputField {
    placeholder: string
    onChange: (value: string) => void
    required: boolean
    value: string
    title: string
    mask?: string
}

const InputField = ({ placeholder, mask, value, onChange, title }: CustomInputField) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={title}>
        {title}
      </label>
      <InputMask
        placeholder={placeholder}
        mask={mask ?? ''}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>)=> onChange (e.target.value)}
        className="appearance-none border rounded w-full py-2 px-3 text-gray leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};
  
export default InputField