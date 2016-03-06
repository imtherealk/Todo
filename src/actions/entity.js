"use strict";
import TodoDispatcher from '../dispatcher/TodoDispatcher';


export function mergeEntities(entities) {
  TodoDispatcher.dispatch({
    type: 'entity/merge',
    payload: entities
  })
}
