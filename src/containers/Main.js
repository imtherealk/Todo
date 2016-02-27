import React from 'react';
import {Container} from 'flux/utils';

import {loadTodo, STATUS} from '../actions/TodoActionCreators';
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
      status: state.status,
      shouldLoad: (state.status == STATUS.NOTHING)
    };
  }
  componentDidMount() {
    if (this.state.shouldLoad) {
      emulateEvent(loadTodo);
    }
  }

  render() {
    return <MainSection {...this.state}/>;
  }
}

export default Container.create(Main);
