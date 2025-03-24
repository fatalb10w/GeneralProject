import React from 'react'

function TitleComponent({title, text}) {
  return (
    <div className='flex justify-between flex-wrap gap-5'>
      <h2 className='text-5xl max-w-lg font-medium leading-15'>{title}</h2>
      <p className='max-w-xl text-lg second leading-10'>{text}</p>
    </div>
  )
}

export default TitleComponent
