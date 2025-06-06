import React from 'react'

function SubBtn({onclicked,count}) {
  return (
   <button className='btn subBtn' onClick={onclicked} disabled={count === 0}>Subtract</button>
  )
}

export default SubBtn
