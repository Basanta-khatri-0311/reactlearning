import React from 'react'

function Form() {
  return (
    <>
    <form>
    <div className='name'>
      <label htmlFor="name">Name:</label>
      <input type="text" name="" id="name" />
    </div>
    <div className='comment'>
      <label htmlFor="comment">Comment</label>
      <textarea name="" id="" rows={8} />
    </div>
    <div>
      <label htmlFor="Mood">Comment</label>
    </div>
    <button>Submit</button>
    </form>
    </>
  )
}

export default Form