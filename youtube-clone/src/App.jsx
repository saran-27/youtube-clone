import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import { Route,Routes } from 'react-router-dom';  
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/video/:categoryId/:videoId' element={<Video></Video>} />
      </Routes>
    </div>
  )
}

export default App
