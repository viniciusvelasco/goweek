import React, { Component } from 'react';
import api from '../services/api';

import twitterLogo from '../twitter.svg';
import './Timeline.css';

class Timeline extends Component {
  state = {
    newTweet: ''
  };

  handleInputChange = e => {
    this.setState({ newTweet: e.target.value});
  }

  handleNewTweet = e => {
    if(e.keyCode !== 13) return;

    const content = this.state.newTweet;
    const author = localStorage.getItem('@GoTwitter:username');

    console.log(content, author);
  }

  render() {
    return (
      <div className="timeline-wrapper">
        <img height={24} src={twitterLogo} alt="GoTwitter" />
        <form>
          <textarea
            value={this.state.newTweet}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewTweet}
            placeholder="O que esta acontecendo?"
          />
        </form>
      </div>
    );
  }
}

export default Timeline;