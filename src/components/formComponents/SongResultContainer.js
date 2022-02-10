import React from "react";
import './SongResultContainer.css'

const SongResultContainer = ({ track, chooseTrack }) => {
  const handleSelectTrack = (e) => {
    chooseTrack(track);
  };
  return (
    <div onClick={handleSelectTrack} className="song-container">
      <img
        src={track.albumUrl}
        style={{ height: "64px", width: "64px" }}
        alt={track.title}
      ></img>
      <div className="song-text">
        <div>{track.title}</div>
        <div> {track.artist}</div>
      </div>
    </div>
  );
};

export default SongResultContainer;
