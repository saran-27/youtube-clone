import React from 'react'
import PlayVideo from '../../Components/PlayVideo/PlayVideo';
import Recommended from '../../Components/Recommended/Recommended';
import { useParams } from 'react-router-dom';
import './Video.css';
function Video() {
  const{videoId,categoryId}=useParams();
  return (
    <div className='player-container'>
      <PlayVideo videoId={videoId} />
      <Recommended categoryId={categoryId} />
    </div>
  )
}

export default Video