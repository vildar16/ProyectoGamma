import React, { useEffect, useRef, useState } from 'react'
import { FaCircle } from 'react-icons/fa'
import lottie from 'lottie-web';
import globo from '../../assets/globo.json';
import { colorify, getColors } from 'lottie-colorify';

export const Globo = ({color}) => {


  const container = useRef(null)
  
  
  useEffect(() => {
    console.log(getColors(color));
    
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true, 
      animationData: colorify([
       undefined, 
       color, 
       undefined, 
       color, 
       color, //sombra globo
       "#000000", 
       undefined, 
       color, 
       undefined, 
       color, 
       color, 
       color, 
       
    


       
      ],
       globo),

    })
    
  }, [])
  
   
    
  return (
    <div className='container' 
          ref = {container}>
    </div>
    
  )
}

//<FaCircle style={{color: color, fontSize: "5em" }}/>