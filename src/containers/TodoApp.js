import React from 'react';
import { Router, Route } from 'react-router';

import AppLayout from './AppLayout';
import About from './About';
import Detail from './Detail';


/**
 * "/" - Main
 * "/about" - About
 */
export default class extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={AppLayout}>
          <Route path="about" component={About}/>
          <Route path="todos/:id" component={Detail}/>
        </Route>
      </Router>
    )
  }
}
