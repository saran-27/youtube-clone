import React, { useEffect, useState } from "react";
import "./Feed.css";
import { Link } from "react-router-dom";
import api_key, { Value_Converter } from "../../Data";
import moment from "moment";
import API_KEY from "../../Data";

function Feed({ category }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = "";

        if (category === 0) {
          url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&maxResults=20&key=${api_key}`;
        } else {
          url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&regionCode=IN&maxResults=20&videoCategoryId=${category}&key=${api_key}`;
        }

        const res = await fetch(url);
        const json = await res.json();
        setData(Array.isArray(json.items) ? json.items : []);
      } catch (error) {
        setData([]);
      }
    };

    setData([]);
    fetchData();
  }, [category]);
  return (
    <div className="feed">
      {data.map(item => (
        <Link
          key={item.id}
          to={`video/${item.snippet.categoryId}/${item.id}`}
          className="card"
        >
          <img
            src={item.snippet.thumbnails.medium.url}
            alt={item.snippet.title}
          />
          <h2>{item.snippet.title}</h2>
          <h3>{item.snippet.channelTitle}</h3>
          <p>
            {item.statistics &&
              `${Value_Converter(item.statistics.viewCount)} views`}{" "}
            • {moment(item.snippet.publishedAt).fromNow()}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default Feed;
