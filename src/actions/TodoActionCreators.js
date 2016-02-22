"use strict";
import superagent from 'superagent';
import TodoDispatcher from '../dispatcher/TodoDispatcher';
import Enum from 'es6-enum';
import Url from 'util/url';


export const STATUS = Enum('NOTHING', 'LOADING', 'NONE', 'SOME');

export function setStatus(status) {
  TodoDispatcher.dispatch({
    type: 'status/set',
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
      let status;
      if (todos.length == 0) {
        status = STATUS.NONE;
      } else {
        status = STATUS.SOME;
      }
      TodoDispatcher.dispatch({
        type: 'todo/set',
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

export function loadDetail(id) {
  let req = superagent
    .get(Url.resolve(`/api/todos/${id}`))
    .end((err, res) => {
      if (err) {
        console.log(err);
      }
      let todo = res.body.data;
      TodoDispatcher.dispatch({
        type: 'todo/detail',
        payload: todo
      });
    });
}
