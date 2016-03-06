"use strict";
import superagent from 'superagent';
import {normalize, arrayOf} from 'normalizr';

import TodoDispatcher from '../dispatcher/TodoDispatcher';
import Enum from 'es6-enum';
import Url from 'util/url';
import {Todo} from 'schemas';


export const STATUS = Enum('NOTHING', 'LOADING', 'NONE', 'SOME');

export function setStatus(status) {
  TodoDispatcher.dispatch({
    type: 'todo-list/set-status',
    payload: status
  })
}

export function addTodo(form) {
  let req = superagent
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
  let req = superagent
    .get(Url.resolve('/api/todos/'))
    .end((err, res) => {
      if (err) {
        console.log(err);
      }
      let todos = res.body.data;
      let {entities, result} = normalize(todos, arrayOf(Todo));
      let status;
      if (todos.length == 0) {
        status = STATUS.NONE;
      } else {
        status = STATUS.SOME;
      }
      TodoDispatcher.dispatch({
        type: 'todo-list/set',
        payload: todos
      });
      setStatus(status);
    });
}

export function checkTodo(id) {
  let req = superagent
    .post(Url.resolve(`/api/todos/${id}/check`))
    .end((err, res) => {
      if (err) {
        console.log(err);
      }
    });
}
