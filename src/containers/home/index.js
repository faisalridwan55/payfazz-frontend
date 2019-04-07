import axios from '../../plugins/axios';
import React, { Component } from 'react';
import * as RB from 'react-bootstrap';
import Carousel from '../../components/Carousel';
import MySpinner from '../../components/MySpinner';
import NewsCard from '../../components/NewsCard';

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
      <RB.Container className="pt-4 my-home my-backdrop">
        <MySpinner loading={this.state.loading} />
        <h2 className="ml-4" style={{fontWeight: "bolder"}}>{title}</h2>
        <div className="col-10 offset-1">
          <div className="row mt-4">
            <Carousel data={this.state.carousel_data}/>
          </div>

          <hr/>

          <div className="row mt-4">
            <div className="wrapper">
              {this.state.data.map((news, index) =>
                <div className="mb-3 w-50" key={index}>
                  <NewsCard news={news} />
                </div>
              )}
            </div>
          </div>
        </div>
      </RB.Container>
    );
  }
}

export default Home;
