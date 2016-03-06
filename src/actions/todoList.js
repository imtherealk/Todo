"use strict";
import superagent from 'superagent';
import {normalize, arrayOf} from 'normalizr';

import TodoDispatcher from '../dispatcher/TodoDispatcher';
import Enum from 'es6-enum';
import Url from 'util/url';
import {Todo} from 'schemas';
import {mergeEntities} from './entity';


export const STATUS = Enum('NOTHING', 'LOADING', 'NONE', 'SOME');

export function setStatus(status) {
  TodoDispatcher.dispatch({
    type: 'todo-list/set-status',
    payload: status
  })
}

export function addTodo(form) {
  superagent
    .post(Url.resolve('/api/todos/'))
    .set('Content-Type', 'application/x-www-form-urlencoded')
    .send(form)
    .end((err, res) => {
      if (err) {
        console.log(err);
      }
      loadTodo();
    });
}

export function loadTodo() {
  setStatus(STATUS.LOADING);
  superagent
    .get(Url.resolve('/api/todos/'))
    .end((err, res) => {
      if (err) {
        console.log(err);
      }
      let data = res.body.data;
      let {entities, result} = normalize(data, arrayOf(Todo));
      let status;
      if (result.length == 0) {
        status = STATUS.NONE;
      } else {
        status = STATUS.SOME;
      }
      mergeEntities(entities);
      TodoDispatcher.dispatch({
        type: 'todo-list/set',
        payload: result
      });
      setStatus(status);
    });
}
