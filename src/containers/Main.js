import React from 'react';
import {Container} from 'flux/utils';

import {loadTodo} from '../actions/TodoActionCreators';
import {emulateEvent} from 'util';
import TodoStore from '../stores/TodoStore';
import MainSection from '../components/MainSection';

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
  componentDidMount() {
    emulateEvent(loadTodo);
  }

  render() {
    return <MainSection {...this.state}/>;
  }
}

export default Container.create(Main);
