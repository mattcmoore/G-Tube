import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import Carousel from '../components/HomePage/Carousel'
import SideBar from '../components/HomePage/SideBar'
import Homevideos from '../components/Homevideos/Homevideos'
function Home() {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <SideBar/>
    <Homevideos/>
    </>
  )
}

export default Home