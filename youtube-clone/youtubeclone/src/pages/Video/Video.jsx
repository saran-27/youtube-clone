import React from 'react'
import PlayVideo from '../../Components/PlayVideo/PlayVideo';
import Recommended from '../../Components/Recommended/Recommended';
import './Video.css';
function Video() {
  return (
    <div className='player-container'>
      <PlayVideo />
      <Recommended />
    </div>
  )
}

export default Video