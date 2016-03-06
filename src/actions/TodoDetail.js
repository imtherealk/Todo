"use strict";
import superagent from 'superagent';
import {normalize} from 'normalizr';
import {Todo} from '../schemas';
import {mergeEntities} from './entity';
import TodoDispatcher from '../dispatcher/TodoDispatcher';
import Enum from 'es6-enum';
import Url from 'util/url';


export const STATUS = Enum('NOTHING', 'LOADING', 'ONE');

export function setStatus(status) {
  TodoDispatcher.dispatch({
    type: 'todo-detail/set-status',
    payload: status
  })
}

export function setItem(itemId) {
  TodoDispatcher.dispatch({
    type: 'todo-detail/set',
    payload: itemId
  });
}

export function loadDetail(id) {
  setStatus(STATUS.LOADING);
  let req = superagent
    .get(Url.resolve(`/api/todos/${id}`))
    .end((err, res) => {
      if (err) {
        console.log(err);
      }
      let data = res.body.data;
      let {entities, result} = normalize(data, Todo);
      mergeEntities(entities);
      setItem(result);
      setStatus(STATUS.ONE);
    });
}
