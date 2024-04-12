import React, { useEffect, useState } from 'react'

export default function Github() {
    const [data,setData] = useState([])
    useEffect(()=>{
fetch('https://api.github.com/users/manojwebdevelopment')
.then(res=>res.json())
.then(data=>{
    console.log(data);
    setData(data)
})
    },[])

  return (
    <div className='d-block text-center'>
    <p className=' font-weight-bold'>Github Followers : {data.followers}</p>
   <div><img src={data.avatar_url} alt="git picture" width={300} /></div>
    </div>
  )
}
