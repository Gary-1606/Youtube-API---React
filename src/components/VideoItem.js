import './VideoItem.css';
import React from 'react';

class VideoItem extends React.Component {
    
    videoSelected = () => {
        this.props.onVideoSelect(this.props.video);
    }
    render() {
        const { thumbnails, title}= this.props.video.snippet;
        return (
            <div onClick={this.videoSelected} className="video-item item">
                <img className="ui image" src={thumbnails.medium.url} alt={title}/>
                <div className="content">
                    <div className="header">
                        {title}
                    </div> 
                </div>
            </div>
        )
    }
}

export default VideoItem;