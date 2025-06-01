import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setData] = useState([])
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const data = await fetch('https://api.github.com/users/Basanta-khatri-0311')
                const formatedData =await data.json()
                setData(formatedData)
            } catch (error) {
                console.log(`Error while fetching data: ${error}`)
            }
        }
        fetchApi()
    }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl '>
      GitHub Followers: {data.followers}
    </div>
  )
}

export default Github
