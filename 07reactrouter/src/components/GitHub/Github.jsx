import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    // const [data,setData] = useState([])
    // useEffect(() => {
    //     const fetchApi = async () => {
    //         try {
    //             const data = await fetch('https://api.github.com/users/Basanta-khatri-0311')
    //             const formatedData =await data.json()
    //             setData(formatedData)
    //         } catch (error) {
    //             console.log(`Error while fetching data: ${error}`)
    //         }
    //     }
    //     fetchApi()
    // }, [])
    const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>
      GitHub Followers: {data.followers}
      <img src={data.avatar_url} alt="git picture" width={300}/>
    </div>
  )
}

export default Github


export const githubLoader = async  () => {
    const resp = await fetch('https://api.github.com/users/Basanta-khatri-0311')
    return resp.json()
}