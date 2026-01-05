import React ,{useEffect, useState}from 'react'
import './PlayVideo.css';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import API_KEY, { Value_Converter }  from '../../Data';
import moment from 'moment';

function PlayVideo({videoId}) {
    const [apiData,setApiData]=useState(null);
    const  [channelData, setChannelData] = useState(null);
    const [commentsData, setCommentsData] = useState([]);


   useEffect(() => {
    const fetchVideoData = async () => {
  try {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${API_KEY}`;

    const res = await fetch(videoDetails_url);
    const data = await res.json();

    if (data.items && data.items.length > 0) {
      setApiData(data.items[0]);
    }
  } catch (error) {
    console.error("Error fetching video:", error);
  }
};
  if (videoId) {
    fetchVideoData();
  }
}, [videoId]);


useEffect(() => {
  const fetchChannelData = async () => {
    //fetch channel data
    const channelData_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
    .then(res=>res.json())
    .then(data=>{
        setChannelData(data.items[0]);
    })
 };
  if (apiData) {
    fetchChannelData();
  }
}, [apiData]); 

//fetching comment data
  useEffect(() => {
    const fetchCommentData = async () => {
    //fetch comment data
    const commentData_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(commentData_url)
    .then(res=>res.json())
    .then(data=>{
        setCommentsData(data.items);
    });
  }
    if (apiData) {
      fetchCommentData();
    }
  }, [apiData]);

  return (
    <div className='play-video'>
        {/* <video src={video1} controls autoPlay muted></video> */}
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title='Video' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h3>{apiData?.snippet?.title || "Title Here"}</h3>
        <div className="play-info">
            <p>{apiData?Value_Converter(apiData.statistics.viewCount):"27K"} &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():"2 days ago"}</p>
            <div>
                <span><img src={like} alt="like" />{apiData?Value_Converter(apiData.statistics.likeCount):"100k"}</span>
                <span><img src={dislike} alt="dislike" /></span>
                <span><img src={share} alt="share" /> Share</span>
                <span><img src={save} alt="save" /> Save</span>
            </div>
        </div>
        <hr></hr>
        <div className="publisher">
            <img src={channelData?channelData.snippet.thumbnails.default.url:""} alt=''></img>
            <div>
                <p>{apiData?apiData.snippet.channelTitle:""}</p>
                <span>{channelData?Value_Converter(channelData.statistics.subscriberCount):"27K"} subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="video-description">
            <p>{apiData?apiData.snippet.description.slice(0,250):"No description available."}</p>
            <hr />
            <h4>{apiData?Value_Converter(apiData.statistics.commentCount):"0"} Comments</h4>
            {commentsData.map((commentItem,index)=>{
                return(  <div key={index} className="comment">
                <img src={commentItem.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user"></img>
             <div>
                <h3>{commentItem.snippet.topLevelComment.snippet.authorDisplayName}<span>{moment(commentItem.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></h3>
                <p>{commentItem.snippet.topLevelComment.snippet.textOriginal}</p>
            <div className="comment-action">
                <img src={like} alt="like"></img>
                <span>{Value_Converter(commentItem.snippet.topLevelComment.snippet.likeCount)}</span>
                <img src={dislike} alt="dislike"></img>
            </div>
            </div>
            </div>
                )
            })}
        </div>
    </div>
  )
}

export default PlayVideo