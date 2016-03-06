import _ from 'lodash';
import { ReduceStore } from 'flux/utils';
import TodoDispatcher from '../dispatcher/TodoDispatcher';
import EntityStore from './EntityStore';
import {STATUS} from '../actions/todoDetail';

class TodoDetailStore extends ReduceStore {
  getInitialState() {
    return {
      item: null,
      status: STATUS.NOTHING
    }
  }

  reduce(state, action) {
    switch (action.type) {
      case 'todo-detail/set':
        return _.assign({}, state, {
          item: action.payload
        });
      case 'todo-detail/set-status':
        return _.assign({}, state, {
          status: action.payload
        });
      default:
        return state;
    }
  }

  getItem() {
    return EntityStore.getTodo(this.state.item);
  }
}

export default new TodoDetailStore(TodoDispatcher);
