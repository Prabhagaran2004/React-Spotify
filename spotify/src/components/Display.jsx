import React, { useEffect, useRef } from 'react'
import {Route,Routes, useLocation} from 'react-router-dom'
import DisplayHome from './DisplayHome'
import AlbumData from './AlbumData'
import { albumsData } from '../assets/assets'

const Display = () => {
  const displayRef = useRef()
  const location = useLocation()
  const isAlbum = location.pathname.includes("album")
  const albumId = isAlbum ? location.pathname.slice(-1) : "";
  const bgcolor = albumsData[Number(albumId)].bgColor
  console.log(bgcolor);
  
  
  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
        <Routes>
            <Route path='/' element={<DisplayHome />} />
            <Route path='/album/:id' element={<AlbumData />} />
        </Routes>
    </div>
  )
}

export default Display