import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Carousel from '../components/HomePage/Carousel'
import SideBar from '../components/HomePage/SideBar'
import Homevideos from '../components/Homevideos/Homevideos'
import { useContext } from 'react'
import MetubeContext from '../context/MetubeContext'

function Home() {
  const {theme} = useContext(MetubeContext)

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