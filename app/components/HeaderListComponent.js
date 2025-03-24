import React from 'react'

function HeaderListComponent({title1, title2, title3}) {
  return (
      <div>
        <ul className='flex gap-15 text-lg second'>
          <li>{title1}</li>
          <li>{title2}</li>
          <li>{title3}</li>
        </ul>
      </div>
  )
}

export default HeaderListComponent
