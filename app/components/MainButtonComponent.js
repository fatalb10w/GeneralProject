import React from 'react'

function MainButtonComponent({title}) {
  return (
    <button className='rounded-none bg-gradient-to-r from-[#60BBEE] to-[#0A72AD] text-white py-5 px-10 text-lg font-medium'>{title}</button>
  )
}

export default MainButtonComponent
