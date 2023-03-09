import React from 'react'
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
import { useState } from 'react';
import { useEffect } from 'react';


function Carousel() {
  const [selected, setSelected] = useState(0)
  const arr = ['All', 'Music', 'News', 'Gaming', 'Live', 'Trucks', 'Driving', 'Tourist destinations', 'Comedy', 'Thrillers', 'Basketball', 'Eating', 
  'Gaming', 'Background music', 'History', 'Action-adventure games', 'Cars', 'Nature', 'Conversation', 'Recently Uploaded' ]
  
  const handleClick = async(e) => {
    await setSelected(parseInt(e.target.id))
  }

  useEffect(()=>{
  }, [selected])

  return (
    <div className="carousel-container">
    <ScrollingCarousel infinite={false}>
        {arr.map((item, index)=>(
          <div className={`carousel-cell ${selected === index ? 'selected' : ''}`} onClick={handleClick} key={index} id={index}>{item}</div>
  ))}  
    </ScrollingCarousel>
    </div>
  )
}

export default Carousel