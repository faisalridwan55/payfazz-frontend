import React, { Component } from 'react';
import { Switch, Router, Route, NavLink, Redirect } from 'react-router-dom';
import './index.sass';
import Home from '../home';
import Detail from '../detail';
import * as RB from 'react-bootstrap';
import history from '../../plugins/history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <RB.Navbar bg="dark" variant="dark" className="flex-column">
          <RB.Navbar.Brand href="/all">Indo News</RB.Navbar.Brand>
          <RB.Nav>
            <NavLink exact to="/all">All News</NavLink>
            <NavLink exact to="/business">Business</NavLink>
            <NavLink exact to="/entertainment">Entertainment</NavLink>
            <NavLink exact to="/general">General</NavLink>
            <NavLink exact to="/health">Health</NavLink>
            <NavLink exact to="/science">Science</NavLink>
            <NavLink exact to="/sport">Sport</NavLink>
            <NavLink exact to="/technology">Technology</NavLink>
          </RB.Nav>
        </RB.Navbar>
        
        <Switch>
          <Route exact path="/" render={() => (
              <Redirect to="/all"/>
          )}/>
          <Route
            exact
            path={"/:type/detail"} component={Detail}
          />
          <Route 
            exact
            path={"/:type(all|business|entertainment|general|health|science|sport|technology)"}
            component={Home}
          />
          <Route render={() => (
              <Redirect to="/all"/>
          )}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
