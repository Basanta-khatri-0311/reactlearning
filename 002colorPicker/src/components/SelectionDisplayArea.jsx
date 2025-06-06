import React from 'react'

function SelectionDisplayArea({color}) {
  return (
    <div className='selected'>
      <h3>Selected: {color}</h3>
    </div>
  )
}

export default SelectionDisplayArea
