import React from 'react';

class VideoDetail extends React.Component {

    render() {
        if (!this.props.selectedVideo) {
            return <div>Loading</div>
        }
        else {
            const {title, description} = this.props.selectedVideo.snippet;
            const videoSrc = `https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`
            return (
                <div>
                    <div className="ui embed">
                        <iframe src={videoSrc} title="video player"></iframe>
                    </div>
                    <div className="ui segment">
                        <h4 className="ui header">
                            {title}
                        </h4>
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            )
        }
        
    }
}

export default VideoDetail;