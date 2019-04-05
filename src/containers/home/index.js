import axios from '../../plugins/axios';
import React, { Component } from 'react';
import * as RB from 'react-bootstrap';
import Carousel from '../../components/Carousel';
import MySpinner from '../../components/MySpinner';
import NewsCard from '../../components/NewsCard';
import './index.sass';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      carousel_data: []
    };
  }
  fetchData() {
    this.setState({
      loading: true
    })
    let endpoint = `top-headlines?country=id&category=${this.props.match.params.type}`
    if (this.props.match.params.type === 'all') {
      endpoint = 'top-headlines?country=id'
    }
    axios.get(endpoint)
    .then((response) => {
      const carousel_data = response.data.articles.slice(0, 5).map(item => {
        return item;
      });
      const news_data = response.data.articles.slice(5);
      this.setState({
        data: news_data,
        carousel_data: carousel_data,
        loading: false
      })
    })
    .catch((error) => {
      console.log(error);
      this.setState({
        loading: false
      })
    })
  }
  componentWillMount() {
    this.fetchData();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.type !== prevProps.match.params.type) {
      this.fetchData();
    }
  }
  render() {
    const { type } = this.props.match.params;
    let title = '';
    if (type === 'all') {
      title = 'All News';
    } else {
      title = `${type.charAt(0).toUpperCase()}${type.slice(1)}`;
    }
    return (
      <RB.Container className="mt-4">
        <MySpinner loading={this.state.loading} />
        <h2 style={{fontWeight: "bolder"}}>{title}</h2>
        <div className="col-10 offset-1">
          <RB.Row className="mt-4">
            <Carousel data={this.state.carousel_data}/>
          </RB.Row>
          <RB.Row className="mt-4">
            <div className="news-wrapper">
              {this.state.data.map((news, index) =>
                <div className="item" key={index}>
                  <NewsCard news={news} />
                </div>
              )}
            </div>
          </RB.Row>
        </div>
      </RB.Container>
    );
  }
}

export default Home;
