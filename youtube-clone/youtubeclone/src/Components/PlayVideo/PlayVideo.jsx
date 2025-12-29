import React from 'react'
import './PlayVideo.css';
import video1 from '../../assets/video.mp4';
import like from '../../assets/like.png';
import dislike from '../../assets/dislike.png';
import share from '../../assets/share.png';
import save from '../../assets/save.png';
import jack from '../../assets/jack.png';
import user_profile from '../../assets/user_profile.jpg';

function PlayVideo() {
  return (
    <div className='play-video'>
        <video src={video1} controls autoPlay muted></video>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
        <div className="play-info">
            <p>2M &bull; 2 days ago</p>
            <div>
                <span><img src={like} alt="like" /> 2.7M</span>
                <span><img src={dislike} alt="dislike" /> 100k</span>
                <span><img src={share} alt="share" /> Share</span>
                <span><img src={save} alt="save" /> Save</span>
            </div>
        </div>
        <hr></hr>
        <div className="publisher">
            <img src={jack} alt=''></img>
            <div>
                <p>React.js</p>
                <span>2M subscribers</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="video-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <hr />
            <h4>150 Comments</h4>
            <div className="comment">
                <img src={user_profile} alt="user"></img>
             <div>
                <h3>john wick<span>10 days ago</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ad sunt, laudantium voluptates esse reprehenderit cupiditate facilis eaque quos dicta dolorum corrupti provident aperiam aspernatur similique eveniet! Ipsam, minus voluptas.</p>
            <div className="comment-action">
                <img src={like} alt="like"></img>
                <span>1.10M</span>
                <img src={dislike} alt="dislike"></img>
            </div>
            </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="user"></img>
             <div>
                <h3>john wick<span>10 days ago</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ad sunt, laudantium voluptates esse reprehenderit cupiditate facilis eaque quos dicta dolorum corrupti provident aperiam aspernatur similique eveniet! Ipsam, minus voluptas.</p>
            <div className="comment-action">
                <img src={like} alt="like"></img>
                <span>1.10M</span>
                <img src={dislike} alt="dislike"></img>
            </div>
            </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="user"></img>
             <div>
                <h3>john wick<span>10 days ago</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ad sunt, laudantium voluptates esse reprehenderit cupiditate facilis eaque quos dicta dolorum corrupti provident aperiam aspernatur similique eveniet! Ipsam, minus voluptas.</p>
            <div className="comment-action">
                <img src={like} alt="like"></img>
                <span>1.10M</span>
                <img src={dislike} alt="dislike"></img>
            </div>
            </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="user"></img>
             <div>
                <h3>john wick<span>10 days ago</span></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ad sunt, laudantium voluptates esse reprehenderit cupiditate facilis eaque quos dicta dolorum corrupti provident aperiam aspernatur similique eveniet! Ipsam, minus voluptas.</p>
            <div className="comment-action">
                <img src={like} alt="like"></img>
                <span>1.10M</span>
                <img src={dislike} alt="dislike"></img>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo