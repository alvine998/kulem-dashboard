import React from 'react'

export default function Button({label, onClick, type, color}) {
  return (
    <div className='mt-2'>
        {
            color == 'success' ?
            <button className='bg-green-500 hover:bg-green-600 rounded-lg p-1 transition duration-200 text-white w-full h-auto' onClick={onClick} type={type} >
                {label}
            </button> : ""
        }
        {
            color == 'primary' ?
            <button className='bg-blue-500 hover:bg-blue-600 rounded-lg p-1 transition duration-200 text-white w-full h-auto' onClick={onClick} type={type} >
                {label}
            </button> : ""
        }
    </div>
  )
}
