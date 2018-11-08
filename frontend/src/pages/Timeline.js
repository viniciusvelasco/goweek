import React, { Component } from 'react';
import api from '../services/api';

import twitterLogo from '../twitter.svg';
import './Timeline.css';
import { __await } from 'tslib';

class Timeline extends Component {
  state = {
    tweets: [],
    newTweet: ''
  };

  async componentDidMount() {
    const response = await api.get('tweets');

    this.setState({ tweets: response.data })
  }

  handleInputChange = async e => {
    this.setState({ newTweet: e.target.value});
  }

  handleNewTweet = async e => {
    if(e.keyCode !== 13) return;

    const content = this.state.newTweet;
    const author = localStorage.getItem('@GoTwitter:username');

    await api.post('tweets', { content, author });

    this.setState({ newTweet: '' });
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
        { this.state.tweets.map(tweet => <h1>{tweet.content}</h1>) }
      </div>
    );
  }
}

export default Timeline;