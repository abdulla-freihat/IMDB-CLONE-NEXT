'use client'
import { useEffect } from "react"

const error = ({error , reset}) => {


     useEffect(()=>{

      
        console.log(error);
         
     } , [error])

  return (
    <div className="text-center mt-10">
        <h1>Something went wring . please try again</h1>
        <button className='text-amber-600' onClick={()=>reset()}>Try Again</button>
    </div>
  )
}

export default error