import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import Carousel from '../components/HomePage/Carousel'

function Home() {
  return (
    <>
    <Navbar/>
    <Link to='/videoPage'><button style={{'height': '500px'}}>Go to video</button></Link>
    <Carousel/>
    </>
  )
}

export default Home