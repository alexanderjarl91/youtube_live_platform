import React, { useState, useEffect } from "react";
import "./App.css";
import youtube from "./api/youtube";

//components
import Header from "./components/Header";
import Headline from "./components/Headline";
import Videos from "./components/Videos";

function App() {
  const [videos, setVideos] = useState([]);
  const searchString = "Alexander Jarl";

  const getVideos = async (query) => {
    const response = await youtube.get("/search", {
      params: {
        q: query,
      },
    });
    setVideos([response.data.items]);
  };

  useEffect(() => {
    console.log("videos:", videos);
  }, [videos]);

  return (
    <div className="App">
      <Header />
      
      <Headline />
      <Videos />

      {/* <button onClick={()=> {
      getVideos(searchString)
    }}>Search</button> */}
  
    </div>
  );
}

export default App;
