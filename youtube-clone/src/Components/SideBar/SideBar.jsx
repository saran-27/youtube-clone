import React from 'react'
import automobiles from '../../assets/automobiles.png'
import cameron from '../../assets/cameron.png'
import music from '../../assets/music.png'
import sports from '../../assets/sports.png'
import news from '../../assets/news.png'
import entertainment from '../../assets/entertainment.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import tech from '../../assets/tech.png'
import jack from '../../assets/jack.png'
import blogs from '../../assets/blogs.png'
import game_icon from '../../assets/game_icon.png'
import home from '../../assets/home.png'

function SideBar() {
  return (
    <div className='sidebar'>
      <div className="shortcut-links">
        <div className="side-link">
          <img src={home} alt=''/><p>Home</p>
          </div>
          <div className="side-link">
          <img src={game_icon} alt=''/><p>gaming</p>
          </div>
          <div className="side-link">
          <img src={automobiles} alt=''/><p>automobile</p>
          </div>
          <div className="side-link">
          <img src={sports} alt=''/><p>sports</p>
          </div>
          <div className="side-link">
          <img src={news} alt=''/><p>news</p>
          </div>
          <div className="side-link">
          <img src={entertainment} alt=''/><p>entertainment</p>
          </div>
          <div className="side-link">
          <img src={tech} alt=''/><p>tech</p>
          </div>
          <div className="side-link">
          <img src={music} alt=''/><p>music</p>
          </div>
           <div className="side-link">
          <img src={blogs} alt=''/><p>music</p>
          </div>
         <hr/>
      </div>
    </div>
  )
}

export default SideBar;