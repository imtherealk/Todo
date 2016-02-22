import _ from 'lodash';
import { ReduceStore } from 'flux/utils';
import TodoDispatcher from '../dispatcher/TodoDispatcher';
import {loadTodo} from '../actions/TodoActionCreators'
import {STATUS} from '../actions/TodoActionCreators';

class TodoStore extends ReduceStore {
    getInitialState() {
        return {
            items: [],
            status: STATUS.NOTHING
        }
    }

    reduce(state, action) {
      switch(action.type) {
        case 'todo/add':
          return _.assign({}, state, {
            items: state.items.concat([action.payload])
          });
        case 'todo/set':
          return _.assign({}, state, {
            items: action.payload
          });
        case 'status/set':
          return _.assign({}, state, {
            status: action.payload
          });
        default:
          return state;
        }
    }
}

export default new TodoStore(TodoDispatcher)
