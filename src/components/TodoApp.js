import React from 'react';
import { Container } from 'flux/utils';
import { Router, Route } from 'react-router';

import TodoStore from '../stores/TodoStore';
import Header from './Header';
import Footer from './Footer';
import MainSection from './MainSection';
import {loadTodo} from '../actions/TodoActionCreators'

class Main extends React.Component {
  static getStores() {
    return [TodoStore];
  }

  static calculateState(prevState) {
    let state = TodoStore.getState();
    return {
      todos: state.items,
      status: state.status
    };
  }

  render() {
    return <MainSection {...this.state}/>;
  }
}

export const MainContainer = Container.create(Main);

export class AppLayout extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div style={{paddingTop: 64}}>
          {this.props.children || <MainContainer/>}
        </div>
        <Footer/>
      </div>
    );
  }
}


class About extends React.Component {
  render() {
    return (
      <div>
        Hello!
      </div>
    );
  }
}

class Detail extends React.Component {
  render() {
    let {params} = this.props;
    return <TodoDetail/>;
  }
}

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
