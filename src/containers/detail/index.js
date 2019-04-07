import React, { Component } from 'react';
import * as RB from 'react-bootstrap';
import MySpinner from '../../components/MySpinner';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      news: {},
      loading: false,
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler() {
    window.open(this.state.news.url, "_blank")
  }
  calculateDate() {
    return this.state.news.publishedAt.slice(0,-10);
  }
  fetchData() {
    this.setState({
      news: this.props.location.state.param.news,
    });
  }
  componentWillMount() {
    this.fetchData();
  }
  render() {
    console.log(this.state);
    const news = this.state.news;
    return (
      <RB.Container className="pt-4 my-detail my-backdrop">
        <MySpinner loading={this.state.loading} />
        <div className="col-10 offset-1">
          <div className="row" style={{fontWeight: "bolder", fontSize: "24px"}}>
            {news.title}
          </div>
          <div className="row">
            <small style={{color: 'grey'}}>
              {`${news.source.name} - ${this.calculateDate()}`}
            </small>
          </div>
          <div className="mt-2 row">
            <img
              className="d-block w-100"
              src={news.urlToImage}
              alt={news.title}
            />
          </div>
          <div className="row my-3">
            <div style={{color: '#343a40'}}>
              <RB.Card bg="light">
                <RB.Card.Body>
                  <RB.Card.Text className="font-weight-bold">
                    <div className="row">
                      <div className="col-3">
                        Author:
                      </div>
                      <div className="col">
                        {news.author}
                        {(news.author == null) ? 'Anonymous' : news.author}
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-3">
                        Description:
                      </div>
                      <div className="col">
                        {news.description}
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-3">
                        Content:
                      </div>
                      <div className="col">
                        {news.content}
                      </div>
                    </div>
                    <div className="row mt-4 justify-content-center">
                      <RB.Button variant="primary" className="font-weight-bold w-50" onClick={this.clickHandler.bind(this)}>
                        Read More
                      </RB.Button>
                    </div>
                  </RB.Card.Text>
                </RB.Card.Body>
              </RB.Card>
            </div>
          </div>
        </div>
      </RB.Container>
    );
  }
}

export default Detail;

// author: null
// content: "Bisnis.com, JAKARTA- Ilmuan disebut akan menampilkan gambar lubang hitam untuk pertama kalinya. Gambar ini menjadi sebuah terobosan di dunia astrofisika yang menyingkap tentang raksasa medan gravitasi yang menarik apa saja yang melintas didekatnya, bahkan cah… [+864 chars]"
// description: "Ilmuan disebut akan menampilkan gambar lubang hitam untuk pertama kalinya."
// publishedAt: "2019-04-07T03:19:00Z"
// source: {id: null, name: "Bisnis.com"}
// title: "Ilmuan Bakal Singkap Foto Blackhole Untuk Pertama Kalinya? - Bisnis.com"
// url: "https://teknologi.bisnis.com/read/20190407/84/908734/ilmuan-bakal-singkap-foto-blackhole-untuk-pertama-kalinya"
// urlToImage: "https://img.bisnis.com/dynamic/posts/2019/04/07/908734/images