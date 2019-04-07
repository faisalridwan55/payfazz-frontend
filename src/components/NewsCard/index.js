import React, { Component } from 'react';
import './index.sass';
import history from '../../plugins/history';

class NewsCard extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(e) {
    const param = {
      news: e
    }
    history.push(`${history.location.pathname}/detail`, {param: param});
  }
  render() {
    const { news } = this.props;

    return (
      <div className="my-news container" onClick={this.clickHandler.bind(this, news)}>
        <div className="row overlay">
          <div style={{width: '30%'}}>
            <img
              className="d-block w-100"
              src={news.urlToImage}
              alt={news.title}
            />
          </div>
          <div className="px-4" style={{width: '70%'}}>
            <div className="row">
              <div className="title">{news.title}</div>
            </div>
            <div className="row">
              <small>{news.author}</small>
            </div>
            <div className="row">
              <small>{news.publishedAt.slice(0,-10)}</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsCard;
