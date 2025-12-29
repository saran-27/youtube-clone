import React, { useState } from 'react'
import Navbar from '../src/Components/NavBar/Navbar'
import { Route,Routes } from 'react-router-dom';  
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';
function App() {
  const [sideBar,setSideBar]=useState(true);
  return (
    <div>
      <Navbar setSideBar={setSideBar}/>
      <Routes>
        <Route path='/' element={<Home sideBar={sideBar}></Home>} />
        <Route path='/video/:categoryId/:videoId' element={<Video></Video>} />
      </Routes>
    </div>
  )
}

export default App