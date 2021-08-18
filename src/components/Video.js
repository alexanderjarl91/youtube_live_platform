import React, {useEffect} from "react";
import "../styles/Video.css";

export default function Video({ title, channel, thumbnail, id }) {
  const videoLink = `https://www.youtube.com/embed/${id}`

  useEffect(()=> {
    console.log(videoLink)
  })

return <div className="video__container" >
    <iframe className="video__iframe" src={videoLink} frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      
      title="Embedded youtube"></iframe>
  {/* <img className="video__thumbnail" src={thumbnail} alt="" /> */}
  <div className="video__info">
    <h2 className="video__channel">{channel}</h2>
    <div className="video__liveContainer">
      <h2 className="video__live">LIVE</h2>
      <div className="video__liveIndicator"></div>

    </div>
  </div>
    <h2 className="video__title">{title}</h2>
  </div>;
}
