import React, { useEffect, useState } from 'react'
import './Feed.css'
import { Link } from 'react-router-dom'
import API_KEY from '../../Data/ApiKey';
import thumbnail1 from '../../assets/thumbnail1.png'
import thumbnail2 from '../../assets/thumbnail2.png'
import thumbnail3 from '../../assets/thumbnail3.png'
import thumbnail4 from '../../assets/thumbnail4.png'
import thumbnail5 from '../../assets/thumbnail5.png'
import thumbnail6 from '../../assets/thumbnail6.png'
import thumbnail7 from '../../assets/thumbnail7.png'
import thumbnail8 from '../../assets/thumbnail8.png'

function Feed({category}) {
    const[data,SetData]=useState([])
    
    const  fetchData = async()=>{
        const Video_list=`GET https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=50&VideoCategoryId=${category}&key=${API_KEY}`
        await fetch(Video_list).then((response)=>response.json()).then((data)=>{
            SetData (data.items);
        })
    }
    useEffect(()=>{
        fetchData()
    },[category])
        return (
    <div className='feed'>
        <Link to={`video/20/2727`} className="card">
            <img src={thumbnail1} alt="thumbnail" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2days ago</p>
        </Link>
        <div className="card">
            <img src={thumbnail2} alt="thumbnail" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail3} alt="thumbnail" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail4} alt="thumbnail" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail5} alt="thumbnail" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail6} alt="thumbnail" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail7} alt="thumbnail" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail8} alt="thumbnail" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail1} alt="thumbnail" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail2} alt="thumbnail" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail3} alt="thumbnail" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail4} alt="thumbnail" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail5} alt="thumbnail" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail6} alt="thumbnail" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail7} alt="thumbnail" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail8} alt="thumbnail" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail1} alt="thumbnail" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail2} alt="thumbnail" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail3} alt="thumbnail" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail4} alt="thumbnail" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail5} alt="thumbnail" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail6} alt="thumbnail" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail7} alt="thumbnail" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2days ago</p>
        </div>
        <div className="card">
            <img src={thumbnail8} alt="thumbnail" />
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,</h2>
            <h3>GreatStack</h3>
            <p>15k views &bull; 2days ago</p>
        </div>
    </div>
  )
}

export default Feed