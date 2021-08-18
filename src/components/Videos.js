import React, { useState, useEffect } from "react";
import "../styles/Videos.css";
import Video from "./Video";
import youtube from "../api/youtube";

export default function Videos() {
  const [videos, setVideos] = useState([]);
  const [searchString, setSearchString] = useState();
  const [loading, setLoading] = useState(false);

  const getVideos = async (query) => {
    setLoading(true);
    const response = await youtube.get("/search", {
      params: {
        q: query,
        type: "video",
        eventType: "live",
      },
    });
    setVideos([response.data.items]);
    setLoading(false);
  };

  useEffect(() => {
    getVideos(searchString);
  }, [searchString]);

  return (
    <div className="videos__container">
      <input
        className="videos__searchInput"
        type="text"
        placeholder="search.."
        onChange={(e) => {
          setSearchString(e.target.value);
        }}
      />
      <h2 className="videos__broadcasts">Broadcasts</h2>
      <div className="videos__grid">
        {videos.length > 0 && !loading
          ? videos[0].map((videoData, index) => {
              const video = videoData.snippet;
              return (
                <Video
                  key={index}
                  id={videoData?.id.videoId}
                  title={video.title}
                  channel={video.channelTitle}
                  thumbnail={video.thumbnails.high.url}
                />
              );
            })
          : null}
      </div>

      {/* should be a loading animation.. */}
      {searchString && loading === true && (
        <h2 className="videos__loading">loading {searchString} broadcasts..</h2>
      )}
    </div>
  );
}
