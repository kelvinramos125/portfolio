import React from "react";
import Home from '../Index.js/Index';
import Projects from '../Projects/Projects'
import {BrowserRouter as Router, Route} from "react-router-dom";


class Routes extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/Projects' component={Projects} />
      </div>
      </Router>
    );
  }
}

export default Routes;