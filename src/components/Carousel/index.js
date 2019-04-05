import React, { Component } from 'react';
import './index.sass';
import * as RB from 'react-bootstrap';

class Carousel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;

    if (data.length > 0) {
      return (
        <RB.Carousel>
          {data.map((news, index) => 
            <RB.Carousel.Item key={index}>
              <img style={{height: 500, margin: 0}}
                className="d-block w-100"
                src={news.urlToImage}
                alt={news.title}
              />
              <RB.Carousel.Caption>
                <h3>{news.title}</h3>
                <p>{news.author}</p>
              </RB.Carousel.Caption>
            </RB.Carousel.Item>
          )}
        </RB.Carousel>
      );
    }
    return null;
  }
}

export default Carousel;
