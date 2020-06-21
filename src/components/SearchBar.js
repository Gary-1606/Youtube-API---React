import React from "react";

class SearchBar extends React.Component {
  state = {
    inputVal: ""
  };
  onFormSubmit = event => {
    event.preventDefault();
    this.props.searchSubmit(this.state.inputVal);
  };
  onInputChange = event => {
    this.setState({
      inputVal: event.target.value
    });
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>YouTube Video Search</label>
            <input
              type="text"
              placeholder="Search for YouTube videos"
              value={this.state.inputVal}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
