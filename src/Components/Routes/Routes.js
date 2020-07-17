import React from "react";
import Home from '../Index.js/Index';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';
import {BrowserRouter as Router, Route} from "react-router-dom";


class Routes extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/Projects' component={Projects} />
        <Route exact path='/Resume' component={Resume} />
        <Route exact path='/Contact' component={Contact} />
      </div>
      </Router>
    );
  }
}

export default Routes;