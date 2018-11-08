import React, { Component } from 'react';

import like from '../like.svg';
import './Tweet.css';
import api from '../services/api';

class Tweet extends Component {

  handleLike = async() => {
    const { _id } = this.props.tweet;

    await api.post(`like/${_id}`);
  }

  render() {
    const { tweet } = this.props;
    return (
      <h1 className="tweet">
        <strong>{tweet.author}</strong>
        <p>{tweet.content}</p>
        <button type="button" onClick={this.handleLike}>
          <img src={like} alt="like" />
          {tweet.likes}
        </button>
      </h1>
    );
  }
}

export default Tweet;