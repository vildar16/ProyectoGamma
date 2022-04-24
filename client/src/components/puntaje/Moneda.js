import React, { useEffect, useRef, useState } from 'react'
import { FaCircle } from 'react-icons/fa'
import lottie from 'lottie-web';
import moneda from '../../assets/moneda.json';
import { colorify, getColors } from 'lottie-colorify';

export const Moneda = ({color}) => {


  const container = useRef(null)
  
  
  useEffect(() => {
    console.log(getColors(color));
    //"#000000"
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true, 
      animationData: colorify([
        "#000000", 
       color, 
       "#000000", 
       "#000000", 
       "#000000", 
       "#000000", 
       "#000000", 
       color, 
       "#000000", 
       "#000000", 
       "#000000", 
       "#000000", 
       "#000000",
       "#000000"
       
    


       
      ],
       moneda),

    })
    
  }, [])
  
   
    
  return (
    <div className='container' 
          ref = {container}>
    </div>
    
  )
}

//<FaCircle style={{color: color, fontSize: "5em" }}/>