import React from 'react'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
   <>
      <p class="text-3xl font-bold underline ">
    Hello world!
  </p>
 <Link to="/Demo">Click Here</Link>
   </>
  )
}
