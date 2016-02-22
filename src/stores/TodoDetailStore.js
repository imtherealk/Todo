import _ from 'lodash';
import { ReduceStore } from 'flux/utils';
import TodoDispatcher from '../dispatcher/TodoDispatcher';
import {loadTodo} from '../actions/TodoActionCreators'
import {STATUS} from '../actions/TodoActionCreators';

class TodoDetailStore extends ReduceStore {
  getInitialState() {
    return {
      item: []
    }
  }

  reduce(state, action) {
    switch(action.type) {
      case 'todo/detail':
        return _.assign({}, state, {
          item: action.payload
        });
      default:
        return state;
    }
  }
}

export default new TodoDetailStore(TodoDispatcher)
