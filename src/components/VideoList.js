import React from "react";
import VideoItem from "./VideoItem";

class VideoList extends React.Component {
  videos = () => {
    return this.props.videos.map(item => {
      return (
        <VideoItem
          onVideoSelect={this.props.onVideoSelect}
          key={item.id.videoId}
          video={item}
        />
      );
    });
  };

  render() {
    return <div className="ui relaxed divided list">{this.videos()}</div>;
  }
}

export default VideoList;
