import React, { Component } from 'react';
import './index.sass';
import * as RB from 'react-bootstrap';
import history from '../../plugins/history';

class Carousel extends Component {
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
    const { data } = this.props;

    if (data.length > 0) {
      return (
        <div className="my-carousel border border-secondary">
          <span className="my-headline">Headline</span>
          <RB.Carousel>
            {data.map((news, index) => 
              <RB.Carousel.Item key={index}>
                <img
                  className="d-block"
                  src={news.urlToImage}
                  alt={news.title}
                />
                <RB.OverlayTrigger
                  placement="top"
                  overlay={
                    <RB.Tooltip id={'tooltip-top'}>
                      <strong>Click to read more</strong>.
                    </RB.Tooltip>
                  }
                >
                  <RB.Carousel.Caption onClick={this.clickHandler.bind(this, news)}>
                    <h3>{news.title}</h3>
                    <p>{news.author}</p>
                  </RB.Carousel.Caption>
                </RB.OverlayTrigger>
              </RB.Carousel.Item>
            )}
          </RB.Carousel>
        </div>
      );
    }
    return null;
  }
}

export default Carousel;
