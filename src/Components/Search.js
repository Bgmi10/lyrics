import React, { useEffect, useState } from 'react'

export const Search = () => {

    const [userquery , setuserquery] = useState('')
    const [data, setdata] = useState(null)


    const fetch_data = async () =>{
        const res = await fetch(`https://genius.com/api/search/multi?q=${userquery}`)
        const json = await res.json()
        setdata(json)
        console.log(data)
        
    } 

    useEffect(()=>{
        
        const id = setTimeout(() => {
            fetch_data()
        }, 150);

        return() =>clearTimeout(id)
    },[userquery])
  return (
    <div>
        <input type='text' placeholder='search for lyrics' className='border-2 rounded-md p-2 m-4 border-r-blue-500 border-l-purple-500 border-t-orange-500 border-b-rose-600 text-gray-400 outline-none' onChange={(e) => setuserquery(e.target.value)}/>
        <button className='font-bold font-serif bg-teal-300 p-2 rounded-md m-1  '>Search</button>

        <div>
          {
            
          }
        </div>
    </div>
  )
}
