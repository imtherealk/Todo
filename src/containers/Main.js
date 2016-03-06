import React from 'react';
import {Container} from 'flux/utils';

import {checkTodo} from '../actions/todo';
import {loadTodo, STATUS} from '../actions/todoList';
import {emulateEvent} from 'util';
import TodoListStore from '../stores/TodoListStore';
import EntityStore from '../stores/EntityStore';
import MainSection from '../components/MainSection';

class Main extends React.Component {
  static getStores() {
    return [TodoListStore, EntityStore];
  }

  static calculateState(prevState) {
    let state = TodoListStore.getState();
    return {
      todos: TodoListStore.getItems(),
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
