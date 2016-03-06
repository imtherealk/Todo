import _ from 'lodash';
import { ReduceStore } from 'flux/utils';
import TodoDispatcher from '../dispatcher/TodoDispatcher';

class EntityStore extends ReduceStore {
  getInitialState() {
    return {
      todos: {}
    };
  }

  reduce(state, action) {
    switch (action.type) {
      case 'entity/merge':
        let entities = action.payload;
        let newState = _.cloneDeep(state);
        let keys = Object.keys(entities);
        keys.forEach((key) => {
          newState[key] = _.assign(newState[key] || {}, entities[key]);
        });
        return newState;
      default:
        return state;
    }
  }

  getTodo(id) {
    return this.getState().todos[id];
  }
}

export default new EntityStore(TodoDispatcher)
