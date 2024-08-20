import React from 'react'

export const Button = ({name}) => {
   
  return (
    <div>
        <button className='px-5 py-2 m-2 bg-gray-100 rounded-lg'>{name}</button>
    </div>
  )
}
