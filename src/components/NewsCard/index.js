import React, { Component } from 'react';
import * as RB from 'react-bootstrap';
import './index.sass';

class NewsCard extends Component {
  render() {
    const { news } = this.props;

    return (
      <div className="my-news container">
        <div className="row overlay">
          <div style={{width: '30%'}}>
            <img
              className="d-block w-100"
              src={news.urlToImage}
              alt={news.title}
            />
          </div>
          <div className="px-4" style={{width: '70%'}}>
            <RB.Row>
              <div className="title">{news.title}</div>
            </RB.Row>
            <RB.Row>
              <small>{news.author}</small>
            </RB.Row>
            <RB.Row>
              <small>{news.publishedAt.slice(0,-10)}</small>
            </RB.Row>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsCard;
