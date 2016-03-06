import _ from 'lodash';
import { ReduceStore } from 'flux/utils';
import TodoDispatcher from '../dispatcher/TodoDispatcher';
import {STATUS} from '../actions/todoList';
import EntityStore from './EntityStore';

class TodoListStore extends ReduceStore {
  getInitialState() {
    return {
      items: [],
      status: STATUS.NOTHING
    }
  }

  reduce(state, action) {
    switch (action.type) {
      case 'todo-list/add':
        return _.assign({}, state, {
          items: state.items.concat([action.payload])
        });
      case 'todo-list/set':
        return _.assign({}, state, {
          items: action.payload
        });
      case 'todo-list/set-status':
        return _.assign({}, state, {
          status: action.payload
        });
      default:
        return state;
    }
  }

  getItems() {
    return this.getState().items.map(EntityStore.getTodo);
  }
}

export default new TodoListStore(TodoDispatcher)
