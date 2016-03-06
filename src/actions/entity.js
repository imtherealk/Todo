"use strict";
import superagent from 'superagent';
import {normalize, arrayOf} from 'normalizr';

import TodoDispatcher from '../dispatcher/TodoDispatcher';
import Enum from 'es6-enum';
import Url from 'util/url';
import {Todo} from 'schemas';


export const STATUS = Enum('NOTHING', 'LOADING', 'NONE', 'SOME');
