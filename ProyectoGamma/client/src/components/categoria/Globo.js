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
       undefined, //brillo
       color, //sombra estrella
       color, //sombra estrella
       color, //sombra estrella
       undefined, //brillo
       color, //sombra estrella
       undefined, //sombra estrella
       color, //brillo
       color, //sombra estrella
       color, //sombra estrella
       
    


       
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