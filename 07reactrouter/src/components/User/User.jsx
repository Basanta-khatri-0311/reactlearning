import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userId} = useParams()
  return (
    <div>
      <h1>user:{userId}</h1>
    </div>
  )
}

export default User
