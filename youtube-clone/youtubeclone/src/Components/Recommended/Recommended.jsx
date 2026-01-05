import React, { useEffect } from 'react'
import './Recommended.css';
import API_KEY, { Value_Converter } from '../../Data';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Recommended({categoryId}) {

    const [apiData, setApiData] =useState([]);
    
    useEffect(() => {
         const fetchData = async () => {
        
        const recommended_url = ` https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY} `;
        await fetch(recommended_url)
            .then(res => res.json())
            .then(data => {
            setApiData(data.items);
        })
    }
        fetchData();
    }, []);
  return (
    <div className="recommended">
        {apiData.map((item, index) => {
             return(
            <Link  to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video">
            <img src={item.snippet.thumbnails.standard.url} alt="thumbnail" />
        <div className="video-info">
            <h4>{item.snippet.title}</h4>
            <p>{item.snippet.channelTitle}</p>
            <p>{Value_Converter(item.statistics.viewCount)} Views</p>
        </div>
        </Link>
             )
        })}
</div>
  )
}

export default Recommended