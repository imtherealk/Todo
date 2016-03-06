"use strict";
import superagent from 'superagent';
import {normalize, arrayOf} from 'normalizr';

import TodoDispatcher from '../dispatcher/TodoDispatcher';
import Enum from 'es6-enum';
import Url from 'util/url';
import {Todo} from 'schemas';


export const STATUS = Enum('NOTHING', 'LOADING', 'ONE');

export function setStatus(status) {
  TodoDispatcher.dispatch({
    type: 'todo-detail/set-status',
    payload: status
  })
}

export function loadDetail(id) {
  setStatus(STATUS.LOADING);
  let req = superagent
    .get(Url.resolve(`/api/todos/${id}`))
    .end((err, res) => {
      if (err) {
        console.log(err);
      }
      let todo = res.body.data;
      TodoDispatcher.dispatch({
        type: 'todo-detail/set',
        payload: todo
      });
      setStatus(STATUS.ONE);
    });
}
