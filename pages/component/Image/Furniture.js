import React from 'react'
import { useEffect } from "react";
import list from "../Image/data";
import Furnit from './Furnit';

const Furniture = ({handleClick}) => {
    
    return ( 
        <>
        <section className="grid gray grid-cols-4 grids" >
            {list.map((item)=> 
                (<Furnit key={item.id} item={item} handleClick={handleClick}/>
            ))}
        </section>
        </>
     );}
 
export default Furniture;