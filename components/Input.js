import React from 'react'

export default function Input({ value, placeholder, onChange, type = 'text', label, name, isRequired = false }) {
    return (
        <div className='mt-2'>
            <label className='text-gray-500 text-sm ml-2' htmlFor={name}>{label}</label>
            <div>
                <input
                    type={type}
                    required={isRequired}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    name={name}
                    id={name}
                    className='focus:outline-none focus:ring-1 focus:ring-blue-400 text-sm w-full p-2 rounded-md border-2 border-gray-300'
                />
            </div>
        </div>
    )
}
