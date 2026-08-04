import React, { useEffect, useState } from 'react'

export default function Home() {
    const [search, setSearch] = useState("");

useEffect(() => {

    const timer = setTimeout(() => {

        console.log("Searching:", search);

    },500);

    return () => {

        clearTimeout(timer);

    }

},[search]);
  return (
    <div>
        <input onClick={() => setSearch()}
        placeholder='Search'
        type='text'
        className='border'/>
    </div>
  )
}
