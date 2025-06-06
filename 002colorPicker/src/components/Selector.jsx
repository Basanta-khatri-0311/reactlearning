import React from 'react'

function Selector({setColor}) {
  
  const handelClick = (color) => {
    setColor(color)
  }
  return (
    <div>
      <h2>Select a Color</h2>
      <div className='btns'>
        <button className='blueBtn' onClick={()=>handelClick('blue')}>Blue</button>
        <button className='greenBtn'onClick={()=>handelClick('green')}>Green</button>
        <button className='redBtn' onClick={()=>handelClick('red')}>Red</button>
        <button className='purpBtn' onClick={()=>handelClick('purple')}>Purple</button>
        <button className='yellBtn' onClick={()=>handelClick('yellow')}>Yellow</button>
      </div>
    </div>
  )
}

export default Selector
