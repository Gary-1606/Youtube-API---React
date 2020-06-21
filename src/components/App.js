import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from './VideoDetail';
import youtube from "../api/youtube";
import React from "react";


// Access key: AIzaSyAW6uGmpOaUFFMJvQvC3ahtyXT0gtbi95k
const KEY = "AIzaSyAW6uGmpOaUFFMJvQvC3ahtyXT0gtbi95k";

class App extends React.Component {
  state = {
    video: [],
    selectedVideo: null
  };

  onSearchSubmit = async searchTerm => {
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm,
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
      }
    });
    this.setState({ video: response.data.items, selectedVideo: response.data.items[0] });
  };
  componentDidMount() {
      this.onSearchSubmit('buildings');
  }
  onVideoSelected = (video) => {
      this.setState({
          selectedVideo: video
      });
  }
  render() {
    return (
      <div className="ui container" style={{ padding: "20px" }}>
        <SearchBar searchSubmit={this.onSearchSubmit} />
        <div className="ui grid">
            <div className="ui row">
                <div className="eleven wide column">
            <VideoDetail selectedVideo={this.state.selectedVideo}/>
                     </div>
                     <div className="five wide column">
        <VideoList onVideoSelect={this.onVideoSelected} videos={this.state.video} />

                     </div>
            </div>
        
        </div>
        
      </div>
    );
  }
}

export default App;
