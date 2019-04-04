import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './index.css';
import Home from '../home';
import * as RB from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <RB.Navbar bg="dark" variant="dark">
          <RB.Navbar.Brand href="#home">Top News</RB.Navbar.Brand>
          <RB.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <RB.Navbar.Collapse id="basic-navbar-nav"></RB.Navbar.Collapse>
        </RB.Navbar>

        <Route exact path="/" component={Home} />
      </Router>
    );
  }
}

export default App;
