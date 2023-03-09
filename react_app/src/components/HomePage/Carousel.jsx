import React from 'react'
import { Carousel, ScrollingCarousel } from '@trendyol-js/react-carousel';


function Carousels() {
  const arr = [{catagory: 'All', }]

  return (
    <div className="carousel-container">
    <ScrollingCarousel infinite={false}>
        <div className='carousel-cell'>All</div>
        <div className='carousel-cell'>News</div>
        <div className='carousel-cell'>Gaming</div>
        <div className='carousel-cell'>Music</div>
        <div className='carousel-cell'>Live</div>
        <div className='carousel-cell' >Trucks</div>
        <div className='carousel-cell'>Driving</div>
        <div className='carousel-cell'>Tourist destinations</div>
        <div className='carousel-cell'>Comedy</div>
        <div className='carousel-cell'>Thrillers</div>
        <div className='carousel-cell'>Basketball</div>
        <div className='carousel-cell'>Eating</div>
        <div className='carousel-cell'>Gaming</div>
        <div className='carousel-cell'>Music</div>
        <div className='carousel-cell'>Background music</div>
        <div className='carousel-cell' >History</div>
        <div className='carousel-cell'>Action-adventure games</div>
        <div className='carousel-cell'>Cars</div>
        <div className='carousel-cell'>Nature</div>
        <div className='carousel-cell'>Conversation</div>
        <div className='carousel-cell'>Recently uploaded</div>
    </ScrollingCarousel>
    </div>
  )
}

export default Carousels