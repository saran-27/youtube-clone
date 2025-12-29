import React from 'react'
import './Home.css'
import Feed from '../../Components/Feed/Feed'
import Sidebar from '../../Components/Sidebar/Sidebar'
function Home({sideBar}) {
  return (
    <div>
      <Sidebar sideBar={sideBar}/>
      <div className={`container ${sideBar ? '' : 'large-container'}`}>
        <Feed/>
      </div>
    </div>
  )
}

export default Home;
