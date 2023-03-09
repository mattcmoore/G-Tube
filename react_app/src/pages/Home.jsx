import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import Carousel from '../components/HomePage/Carousel'
import SideBar from '../components/HomePage/SideBar'
import { useContext } from 'react'
import MetubeContext from '../context/MetubeContext'

function Home() {
  const {theme} = useContext(MetubeContext)
  return (
    <>
    <div className={theme.apperance === 'Dark Theme' ? 'dark':'light'}>
    <Navbar/>
    <Link className='center' to='/videoPage'><button >Go to video</button></Link>
    <Carousel/>
    <SideBar/>
    </div>
    </>
  )
}

export default Home