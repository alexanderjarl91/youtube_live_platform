import React from "react";
import "../styles/Headline.css";

export default function Headline() {
  return (
    <div className="headline__container">
      <div className="headline__topText">
        <h1 className="headline__text">WHO'S </h1>
        <h1 className="headline__live">LIVE</h1>
        <div className="headline__liveIndicator"></div>
      </div>
      <h1 className="headline__text"> RIGHT NOW?</h1>
      <p className="app__paragraph">
        This is a platform where you can search for <strong>live video</strong>{" "}
        events currently broadcasting on <strong>YouTube</strong>. To find
        videos, start typing in the searchbox.
      </p>
    </div>
  );
}
