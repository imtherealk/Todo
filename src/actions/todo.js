"use strict";

import superagent from 'superagent';
import {normalize} from 'normalizr';

import TodoDispatcher from '../dispatcher/TodoDispatcher';
import Url from 'util/url';
import {Todo} from 'schemas';
import {mergeEntities} from './entity';

export function checkTodo(id) {
  superagent
    .post(Url.resolve(`/api/todos/${id}/check`))
    .end((err, res) => {
      if (err) {
        console.log(err);
      }
      let data = res.body.data;
      let {entities} = normalize(data, Todo);
      mergeEntities(entities);
    });
}
