import React, { useState } from 'react'
import { GoSearch } from "react-icons/go"

const Search = () => {
    const [shows,setShows] = useState(false)
    return ( 
        <div className="search flex">
            {
                shows? <input
                type="search"
                placeholder='Type to Search'
                className="px-3 py-2 rounded w-full focus:outline-none border-b focus:border-gray-700 shadow-lg w-72 ml-4"
              />:null
            }
            <GoSearch onClick={()=>setShows(!shows)} className="ml-4 font-thin text-3xl cursor-pointer"/>
            {/* <GoSearch onClick={()=>setShows(false)} className="ml-12 font-thin text-3xl cursor-pointer"/> */}
        </div>
     );
}
 
export default Search;