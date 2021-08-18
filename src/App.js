import React from "react";
import "./App.css";

//components
import Header from "./components/Header";
import Headline from "./components/Headline";
import Videos from "./components/Videos";

function App() {

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
