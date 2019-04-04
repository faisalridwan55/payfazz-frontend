import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './index.sass';
import Home from '../home';
import * as RB from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
        <RB.Navbar bg="dark" variant="dark" className="flex-column">
          <RB.Navbar.Brand href="/">Top News</RB.Navbar.Brand>
          <RB.Nav>
            <Link to="/">All News</Link>
            <Link to="/money">Money</Link>
            <Link to="/sport">Sport</Link>
            <Link to="/science">Science</Link>
          </RB.Nav>
        </RB.Navbar>
        
        <Route 
          path={"/"} component={Home}
        />
        <Route 
          path={"/:type"} component={Home}
        />
      </Router>
    );
  }
}

export default App;
