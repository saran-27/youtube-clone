import React,{useState} from 'react'
import './Home.css'
import Feed from '../../Components/Feed/Feed'
import Sidebar from '../../Components/Sidebar/Sidebar'
function Home({sideBar}) {
  const [category, setCategory] =useState(0);
  return (
    <div>
      <Sidebar sideBar={sideBar} category={category} setCategory={setCategory}/>
      <div className={`container ${sideBar ? '' : 'large-container'}`}>
        <Feed category={category}/>
      </div>
    </div>
  )
}

export default Home;
