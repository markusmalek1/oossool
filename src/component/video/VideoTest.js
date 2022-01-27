import React from "react";
import VideoThumbnail from "react-video-thumbnail";
import PlayIcon from "../../assets/icons/PlayIcon";

export default function VideoTest(props) {
  return (
    <div className="p-video">
      <div className="p-video-overlay" />
      <span className="p-fav-icon">{props.icon}</span>
      <span className="p-play-icon">
        <PlayIcon height="80" width="80" />
      </span>
      <VideoThumbnail videoUrl={props.vod} />
    </div>
  );
}
