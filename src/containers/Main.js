import React from 'react';
import {Container} from 'flux/utils';

import {loadTodo} from '../actions/TodoActionCreators';
import {emulateEvent} from 'util';
import TodoListStore from '../stores/TodoListStore';
import MainSection from '../components/MainSection';

class Main extends React.Component {
  static getStores() {
    return [TodoListStore];
  }

  static calculateState(prevState) {
    let state = TodoListStore.getState();
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
