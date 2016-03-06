import React from 'react';
import {Container} from 'flux/utils';

import {checkTodo, loadTodo, STATUS} from '../actions/todoList';
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

  handleCheckTodo(todo) {
    checkTodo(todo.id)
  }

  render() {
    return <MainSection todos={this.state.todos}
                        status={this.state.status}
                        onCheckTodo={this.handleCheckTodo.bind(this)}/>;
  }
}

export default Container.create(Main);
