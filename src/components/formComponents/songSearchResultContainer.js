import React from 'react';

export const songSearchResultContainer = (track, chooseTrack) => {
    const handleSelectTrack = () => {
            chooseTrack(track)
    }
  return (
  <div onClick={handleSelectTrack}>
    <img src={track.albumUrl} style={{height: "64px", width: "64px"}} alt={track.title}></img>
    <div>{track.title}</div>
    <div> {track.artist}</div>
  </div>
  );
};
